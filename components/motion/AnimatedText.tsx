import React, { useRef } from "react";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useScrollContainer } from "../../lib/scrollContainer";

type Props = {
  text: string;
  className?: string;
};

// Reveals a paragraph word by word as it scrolls through the viewport.
export default function AnimatedText({ text, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const container = useScrollContainer();
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    container: container ?? undefined,
    // Run after refs attach; the default layout effect fires before the parent scroll div ref is set
    layoutEffect: false,
    offset: ["start 0.85", "end 0.45"],
  });

  if (reduceMotion) {
    return <p className={className}>{text}</p>;
  }

  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={i}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          {word}
        </Word>
      ))}
    </p>
  );
}

type WordProps = {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
};

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {children}
    </motion.span>
  );
}
