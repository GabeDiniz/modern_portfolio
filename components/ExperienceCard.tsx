/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../lib/sanity";
import TechStack from "./TechStack";
import { experienceKey, experienceTech } from "../data/tech";

type Props = {
  experience: Experience;
  index: number;
  total: number;
  progress: MotionValue<number>;
  stack: boolean;
};

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" });

// Vertical offset between stacked card tops, so earlier cards peek out above
const STACK_STEP = 22;

export default function ExperienceCard({ experience, index, total, progress, stack }: Props) {
  // Cards further down the stack shrink the ones above them
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  const dates = `${formatDate(experience.dateStarted)} – ${
    experience.isCurrentlyWorkingHere ? "Present" : formatDate(experience.dateEnded)
  }`;

  return (
    <div
      className={stack ? "sticky top-0 flex h-[80vh] items-start justify-center" : ""}
      style={stack ? { paddingTop: `calc(5.5rem + ${index * STACK_STEP}px)` } : undefined}
    >
      <motion.article
        style={stack ? { scale, transformOrigin: "top center" } : undefined}
        className="w-full rounded-3xl border border-white/10 bg-bground_dark p-6 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] sm:p-8 md:p-10"
      >
        <div className="grid gap-6 md:grid-cols-[240px_1fr] md:gap-10">
          {/* Who / when */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src={urlFor(experience?.companyImage).url()}
                alt=""
                className="h-14 w-14 rounded-full object-cover object-center"
              />
              <div>
                <p className="text-lg font-bold leading-tight">{experience.company}</p>
                <p className="mt-1 text-xs uppercase tracking-[3px] text-gray-500">{dates}</p>
              </div>
            </div>
            <h4 className="text-xl font-light uppercase leading-snug sm:text-2xl">
              {experience.jobTitle}
            </h4>
            {/* Tech used: from data/tech.tsx, falling back to Sanity */}
            <TechStack
              slugs={experienceTech[experienceKey(experience.company, experience.jobTitle)]}
              fallback={experience.technologies}
            />
          </div>

          {/* What */}
          <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-300 lg:text-[15px]">
            {experience.points?.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
}
