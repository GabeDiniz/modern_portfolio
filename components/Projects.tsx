/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Project } from "../typings";
import { urlFor } from "../lib/sanity";
import SectionHeading from "./SectionHeading";
import TechStack from "./TechStack";
import { projectTech } from "../data/tech";

// Hover list with a sticky preview. The card-grid version lives in ProjectsGrid.tsx.

type Props = {
  projects: Project[];
};

const mediaClass = "h-full w-full object-cover";

// 2:1 media for the preview panel. A looping video if one is set, else the image
// (GIFs animate because we request the original asset), else a lettermark.
function ProjectMedia({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const videoUrl = project.preview?.asset?.url;
  if (videoUrl) {
    return (
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={mediaClass}
      />
    );
  }
  if (project.image) {
    return (
      <img
        src={urlFor(project.image).url()}
        alt=""
        loading="lazy"
        className={mediaClass}
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-highlight/25 via-bground_dark to-bground_dark">
      <span
        className={`font-black text-white/15 ${compact ? "text-lg" : "text-7xl"}`}
      >
        {project.title?.charAt(0)}
      </span>
    </div>
  );
}

// Icons come from data/tech.tsx (keyed by title), falling back to Sanity.
function TechIcons({
  project,
  size = "md",
  limit,
}: {
  project: Project;
  size?: "sm" | "md";
  limit?: number;
}) {
  return (
    <TechStack
      slugs={projectTech[project.title]}
      fallback={project.technologies}
      size={size}
      limit={limit}
    />
  );
}

export default function Projects({ projects }: Props) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = projects?.[active];
  const fade = reduceMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] };

  return (
    <div className="relative w-full pt-28 md:pt-24">
      {/* Pink band behind the section */}
      <div className="pointer-events-none absolute left-0 top-[35%] h-[400px] w-full -skew-y-12 bg-highlight/10" />

      <div className="relative mx-auto max-w-6xl px-5 xs:px-10">
        <SectionHeading
          tag="Projects"
          title="Things I've built"
          subtitle="Click a project to view the build"
        />

        <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-[1fr_minmax(0,440px)] md:gap-12 lg:grid-cols-[1fr_520px]">
          {/* List. Hover or focus selects, click opens the repo. */}
          <ul
            role="list"
            className="divide-y divide-white/10 border-y border-white/10"
          >
            {projects?.map((project, i) => {
              const isActive = i === active;
              return (
                <li key={project.title}>
                  <a
                    href={project.linkToBuild}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group relative flex items-center gap-4 py-4 pl-5 pr-3 outline-none transition-colors hover:bg-white/[0.03] focus-visible:bg-white/[0.03]"
                  >
                    {/* Sliding highlight bar */}
                    {isActive && (
                      <motion.span
                        layoutId="project-highlight"
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 400, damping: 36 }
                        }
                        className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-highlight"
                      />
                    )}

                    {/* Thumbnail, phones only (the preview panel is hidden there) */}
                    <div className="h-11 w-[88px] shrink-0 overflow-hidden rounded-md bg-white/5 md:hidden">
                      <ProjectMedia project={project} compact />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate text-base font-semibold transition-colors sm:text-lg ${
                          isActive ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {project.title}
                      </p>
                      <p className="line-clamp-1 text-xs text-gray-500 md:hidden">
                        {project.summary}
                      </p>
                    </div>

                    <div className="hidden sm:block">
                      <TechIcons project={project} size="sm" limit={4} />
                    </div>

                    <ArrowUpRightIcon
                      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                        isActive ? "text-highlight" : "text-gray-600"
                      } group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Preview panel, md and up */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <div className="relative aspect-[2/1] overflow-hidden rounded-2xl border border-white/10 bg-bground_dark">
                <AnimatePresence initial={false}>
                  {current && (
                    <motion.div
                      key={current.title}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={fade}
                      className="absolute inset-0"
                    >
                      <ProjectMedia project={current} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Re-mounts on change and fades in. No exit animation on purpose:
                  rapid hovers would otherwise leave the block stuck mid-exit. */}
              {current && (
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={fade}
                  className="mt-5"
                >
                  <h4 className="text-xl font-bold leading-tight">
                    {current.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {current.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <TechIcons project={current} />
                    <a
                      href={current.linkToBuild}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-highlight hover:underline"
                    >
                      View the build
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:justify-start">
          <a
            href="https://github.com/GabeDiniz"
            target="_blank"
            rel="noopener noreferrer"
            className="heroButton"
          >
            More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
