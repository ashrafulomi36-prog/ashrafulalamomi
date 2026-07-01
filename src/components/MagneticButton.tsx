"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = HTMLMotionProps<"a"> & {
  variant?: "solid" | "outline";
};

export const MagneticButton = React.forwardRef<HTMLAnchorElement, MagneticButtonProps>(
  ({ children, className, variant = "solid", ...props }, forwardedRef) => {
    const ref = React.useRef<HTMLAnchorElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
    const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

    function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      x.set(relX * 0.25);
      y.set(relY * 0.35);
    }

    function handleMouseLeave() {
      x.set(0);
      y.set(0);
    }

    return (
      <motion.a
        ref={(node) => {
          ref.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300",
          variant === "solid" &&
            "bg-ink text-paper hover:bg-signal hover:text-paper",
          variant === "outline" &&
            "border border-line text-ink hover:border-signal hover:text-signal",
          className
        )}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
);
MagneticButton.displayName = "MagneticButton";
