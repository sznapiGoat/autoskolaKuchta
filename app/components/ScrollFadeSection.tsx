"use client";

import { motion } from "framer-motion";

type Props = {
  id?: string;
  className?: string;
  delay?: number;
  children: React.ReactNode;
};

export function ScrollFadeSection({
  id,
  className,
  delay = 0,
  children,
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
