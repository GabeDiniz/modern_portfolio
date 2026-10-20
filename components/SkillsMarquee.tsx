/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { IconBaseProps } from "react-icons";
import { Skill } from "../typings";
import { urlFor } from "../lib/sanity";
import { useScrollContainer } from "../lib/scrollContainer";
import { marqueeTech, TECH } from "../data/tech";

type Props = {
  skills: Skill[];
};

type Tile = { key: string; label: string; node: React.ReactNode };

const sortOrder: { [key: string]: number } = {
  language: 1,
  framework: 2,
  tool: 3,
};

// Tiles come from data/tech.tsx; Sanity skills are only used if that list is empty.
function buildTiles(skills: Skill[]): Tile[] {
  if (marqueeTech.length > 0) {
    return marqueeTech.map((slug) => {
      const tech = TECH[slug];
      // react-icons 5 types icons as returning ReactNode; the project's @types/react predates that
      const Icon = tech.icon as unknown as React.FC<IconBaseProps>;
      return {
        key: slug,
        label: tech.label,
        node: (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] sm:h-8 sm:w-8">
            <Icon size={16} color={tech.color} aria-hidden="true" />
          </span>
        ),
      };
    });
  }
  return [...(skills ?? [])]
    .filter((s) => s?.image)
    .sort((a, b) => (sortOrder[a.type?.toLowerCase()] || 0) - (sortOrder[b.type?.toLowerCase()] || 0))
    .map((skill) => ({
      key: skill.title,
      label: skill.title,
      node: (
        <img
          src={urlFor(skill.image).url()}
          alt=""
          className="h-7 w-7 rounded-full object-cover sm:h-8 sm:w-8"
          loading="lazy"
        />
      ),
    }));
}

// Two rows of skill tiles that drift in opposite directions as the page scrolls.
export default function SkillsMarquee({ skills }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const container = useScrollContainer();
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    container: container ?? undefined,
    // Run after refs attach; the default layout effect fires before the parent scroll div ref is set
    layoutEffect: false,
    offset: ["start end", "end start"],
  });
  // Content is tripled, so staying between -10% and -35% never shows a gap.
  const leftward = useTransform(scrollYProgress, [0, 1], ["-10%", "-35%"]);
  const rightward = useTransform(scrollYProgress, [0, 1], ["-35%", "-10%"]);

  const tiles = buildTiles(skills);
  if (tiles.length === 0) return null;

  const half = Math.ceil(tiles.length / 2);
  const rows = [tiles.slice(0, half), tiles.slice(half)];

  return (
    <div ref={ref} className="overflow-hidden py-16 sm:py-24 space-y-3" aria-hidden="true">
      {rows.map((row, r) => (
        <motion.div
          key={r}
          style={{ x: reduceMotion ? 0 : r === 0 ? leftward : rightward, willChange: "transform" }}
          className="flex w-max gap-3"
        >
          {[...row, ...row, ...row].map((tile, i) => (
            <div
              key={`${tile.key}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap rounded-2xl bg-bground_dark px-5 py-3"
            >
              {tile.node}
              <span className="text-sm text-gray-300 sm:text-base">{tile.label}</span>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
