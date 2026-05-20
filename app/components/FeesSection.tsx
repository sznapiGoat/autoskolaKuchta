"use client";

import { motion } from "framer-motion";
import { officialFees, schoolFees } from "../constants/mockData";
import { Info } from "lucide-react";

const czk = (n: number) => n.toLocaleString("cs-CZ") + " Kč";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const row = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function FeesSection() {
  return (
    <section id="poplatky" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-bold text-foreground sm:text-6xl">
            Poplatky
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Státní poplatky */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
              Státní poplatky
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="border border-border"
            >
              {officialFees.map((fee, idx) => (
                <motion.div
                  key={fee.label}
                  variants={row}
                  className="flex items-center justify-between border-b border-border last:border-0 px-6 py-4"
                >
                  <span className="text-sm text-foreground/80">{fee.label}</span>
                  <span className="text-sm font-bold tabular text-foreground shrink-0 ml-6">
                    {czk(fee.amount)}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Poplatky autoškoly */}
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
              Poplatky autoškoly
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-3"
            >
              {schoolFees.map((fee) => (
                <motion.div
                  key={fee.label}
                  variants={row}
                  className="relative border border-border bg-card p-5 overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-accent/50"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="text-sm font-semibold text-foreground">
                      {fee.label}
                    </span>
                    <span className="text-sm font-bold tabular text-accent-text shrink-0">
                      {czk(fee.fee)}
                    </span>
                  </div>
                  <p className="flex items-start gap-2 text-xs text-muted leading-relaxed max-w-[60ch]">
                    <Info size={12} className="mt-0.5 shrink-0" />
                    {fee.rule}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
