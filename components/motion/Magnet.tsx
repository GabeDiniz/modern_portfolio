import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  // How far outside the element (px) the pull starts
  padding?: number;
  // Higher = subtler pull
  strength?: number;
  className?: string;
};

// Pulls its children toward the cursor when it comes near, springs back when it leaves.
export default function Magnet({
  children,
  padding = 120,
  strength = 4,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const near =
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding;

      x.set(near ? dx / strength : 0);
      y.set(near ? dy / strength : 0);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength, reduceMotion, x, y]);

  return (
    <motion.div ref={ref} className={className} style={{ x, y, willChange: "transform" }}>
      {children}
    </motion.div>
  );
}
