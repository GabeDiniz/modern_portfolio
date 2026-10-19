import React from "react";
import FadeIn from "./motion/FadeIn";

type Props = {
  // The small <tag/> eyebrow, e.g. "Experience"
  tag: string;
  // The big line underneath
  title: string;
  subtitle?: string;
  className?: string;
};

// Section opener: the site's <tag/> eyebrow kept small, with a huge gradient title under it.
export default function SectionHeading({ tag, title, subtitle, className = "" }: Props) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <FadeIn y={12}>
        <p className="text-xs uppercase tracking-[6px] text-gray-500 sm:text-sm sm:tracking-[10px]">
          {"<"}
          {tag}
          {"/>"}
        </p>
      </FadeIn>
      <FadeIn delay={0.1} y={28}>
        <h2
          className="sectionTitle mt-3 font-black uppercase leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 8.5vw, 6.5rem)" }}
        >
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2} y={12}>
          <p className="mt-5 text-xs uppercase tracking-[3px] text-gray-500 sm:text-sm">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
