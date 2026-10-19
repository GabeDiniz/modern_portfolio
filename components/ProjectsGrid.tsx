/* eslint-disable @next/next/no-img-element */
// Previous card-grid version of the projects section, kept for easy revert.
// To go back: in pages/index.tsx import ProjectsGrid instead of Projects.
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Project } from "../typings";
import { urlFor } from "../lib/sanity";
import SectionHeading from "./SectionHeading";

type Props = {
  projects: Project[];
};

const mediaClass =
  "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100";

// Top of the card, 2:1. A looping video if one is set, else the image (GIFs animate
// because we request the original asset), else a lettermark.
function ProjectMedia({ project }: { project: Project }) {
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
    return <img src={urlFor(project.image).url()} alt="" loading="lazy" className={mediaClass} />;
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-highlight/25 via-bground_dark to-bground_dark">
      <span className="text-7xl font-black text-white/15">{project.title?.charAt(0)}</span>
    </div>
  );
}

export default function ProjectsGrid({ projects }: Props) {
  return (
    <div className="relative w-full pt-28 md:pt-24">
      {/* Pink band behind the grid */}
      <div className="pointer-events-none absolute left-0 top-[35%] h-[400px] w-full -skew-y-12 bg-highlight/10" />

      <div className="relative mx-auto max-w-6xl px-5 xs:px-10">
        <SectionHeading
          tag="Projects"
          title="Things I've built"
          subtitle="Click a card to view the build"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16">
          {projects?.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.linkToBuild}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-bground_dark transition-colors duration-300 hover:border-highlight/60"
            >
              <div className="relative aspect-[2/1] w-full overflow-hidden bg-black/30">
                <ProjectMedia project={project} />
                {/* Soft fade so the media blends into the card body */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bground_dark to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5 pt-3">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-lg font-bold leading-tight">{project?.title}</h4>
                  <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-gray-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight" />
                </div>
                <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">{project?.summary}</p>
                {project?.technologies?.some((t) => t?.image) && (
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                    {project.technologies.map(
                      (technology, t) =>
                        technology?.image && (
                          <img
                            key={t}
                            src={urlFor(technology.image).url()}
                            alt={technology.title ?? ""}
                            title={technology.title}
                            className="h-6 w-6 rounded-full"
                          />
                        )
                    )}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
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
