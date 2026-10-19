/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IconBaseProps } from "react-icons";
import { TECH, TechSlug } from "../data/tech";
import { Technology } from "../typings";
import { urlFor } from "../lib/sanity";

type Props = {
  // Slugs from data/tech.tsx. When missing or empty, `fallback` (Sanity) is used.
  slugs?: TechSlug[];
  fallback?: Technology[];
  size?: "sm" | "md";
  limit?: number;
  className?: string;
};

// One round tile with a tooltip that appears above it on hover.
function Tile({ label, tile, children }: { label: string; tile: string; children: React.ReactNode }) {
  return (
    <span
      // Named group: the project rows are already a `group`, so a plain group-hover would light up every tooltip in the row
      className={`group/tile relative flex ${tile} items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10`}
    >
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-[calc(100%+6px)] whitespace-nowrap rounded-md bg-white px-2 py-1 text-[11px] font-semibold leading-none text-bgmain_blue opacity-0 shadow-lg transition-opacity duration-150 group-hover/tile:opacity-100 motion-reduce:transition-none"
      >
        {label}
        {/* Arrow */}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white" />
      </span>
    </span>
  );
}

// A row of tech icons: brand glyph in a small round tile.
export default function TechStack({ slugs, fallback, size = "md", limit, className = "" }: Props) {
  const tile = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  const glyph = size === "sm" ? 13 : 16;

  if (slugs && slugs.length > 0) {
    const list = limit ? slugs.slice(0, limit) : slugs;
    return (
      <div className={`flex flex-wrap gap-1.5 ${className}`}>
        {list.map((slug) => {
          const tech = TECH[slug];
          // react-icons 5 types icons as returning ReactNode; the project's @types/react predates that
          const Icon = tech.icon as unknown as React.FC<IconBaseProps>;
          return (
            <Tile key={slug} label={tech.label} tile={tile}>
              <Icon size={glyph} color={tech.color} aria-label={tech.label} />
            </Tile>
          );
        })}
      </div>
    );
  }

  const images = (fallback ?? []).filter((t) => t?.image);
  if (images.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {(limit ? images.slice(0, limit) : images).map((technology, i) => (
        <Tile key={i} label={technology.title ?? ""} tile={tile}>
          <img
            src={urlFor(technology.image).url()}
            alt={technology.title ?? ""}
            className="h-full w-full rounded-full"
          />
        </Tile>
      ))}
    </div>
  );
}
