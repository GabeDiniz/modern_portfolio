import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";
import { Experience } from "../typings";
import { useScrollContainer } from "../lib/scrollContainer";

type Props = {
  experiences: Experience[];
};

// Cards stack on desktop only; on phones (or with reduced motion) they are a plain list.
function useStackingEnabled() {
  const reduceMotion = useReducedMotion();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return desktop && !reduceMotion;
}

export default function WorkExperience({ experiences }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const container = useScrollContainer();
  const stack = useStackingEnabled();

  // Progress through the whole stack drives each card's scale
  const { scrollYProgress } = useScroll({
    target: ref,
    container: container ?? undefined,
    offset: ["start start", "end end"],
  });

  const total = experiences?.length ?? 0;

  return (
    <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 xs:px-10 md:pt-24">
      <SectionHeading
        tag="Experience"
        title="Where I've worked"
        subtitle={stack ? "Keep scrolling, the cards stack" : undefined}
      />

      <div ref={ref} className="mt-12 space-y-5 md:mt-16 md:space-y-0">
        {experiences?.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.jobTitle}`}
            experience={experience}
            index={index}
            total={total}
            progress={scrollYProgress}
            stack={stack}
          />
        ))}
      </div>
    </div>
  );
}
