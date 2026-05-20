"use client";

import { motion } from "framer-motion";
import { guidance } from "../constants/mockData";
import { CreditCard, UserCheck, CloudRain } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  payment: <CreditCard size={22} />,
  age: <UserCheck size={22} />,
  weather: <CloudRain size={22} />,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ImportantInfoSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-bold text-foreground sm:text-6xl">
            Důležité informace
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-px sm:grid-cols-3"
        >
          {guidance.map((item) => (
            <motion.div
              key={item.id}
              variants={card}
              className="border border-border bg-card p-8"
            >
              <div className="mb-5 text-accent-text">{iconMap[item.id]}</div>
              <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted max-w-[55ch]">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
