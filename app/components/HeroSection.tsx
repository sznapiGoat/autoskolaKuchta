"use client";

import { motion } from "framer-motion";
import { Clock, Mail, Phone } from "lucide-react";
import { contactInfo, courses } from "../constants/mockData";

const czk = (n: number) => n.toLocaleString("cs-CZ") + " Kč";
const tel = (phone: string) => "+420" + phone.replace(/\s/g, "");

const courseB = courses.find((c) => c.id === "b")!;
const courseQuick = courses.find((c) => c.id === "b-rychlo")!;

// Stagger variants for child elements
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 px-6 pb-24 pt-20">
      {/* Grid blueprint — fades in independently for the "coming alive" effect */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 48px)," +
            "repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 48px)",
        }}
      />

      <motion.div
        className="relative mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
        >
          Výcvik skupin AM · A1 · A2 · A · B
        </motion.p>

        {/* Display heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-8xl"
        >
          Auto&shy;škola
          <br />
          <span className="text-slate-400">Kuchta</span>
        </motion.h1>

        {/* Stat bar */}
        <motion.div variants={itemVariants} className="mb-8 flex flex-wrap gap-px">
          <div className="border border-slate-700 bg-slate-800 px-5 py-3">
            <p className="text-xs text-slate-500">Skupina B</p>
            <p className="text-xl font-bold tabular text-white">
              {czk(courseB.price!)}
            </p>
          </div>
          <div className="border border-slate-700 bg-slate-800 px-5 py-3">
            <p className="text-xs text-slate-500">Rychlokurz B</p>
            <p className="text-xl font-bold tabular text-white">
              {czk(courseQuick.price!)}
            </p>
          </div>
          <div className="border border-slate-700 bg-slate-800 px-5 py-3">
            <p className="text-xs text-slate-500">Rychlokurz za</p>
            <p className="flex items-center gap-1.5 text-xl font-bold text-white">
              <Clock size={16} className="text-slate-400" />
              {courseQuick.timeframe}
            </p>
          </div>
        </motion.div>

        {/* CTA buttons — equal height, spring hover */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
        >
          <motion.a
            href={`tel:${tel(contactInfo.phone)}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="inline-flex h-12 items-center justify-center gap-2 border border-white bg-white px-7 text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            <Phone size={15} />
            Zavolat:&nbsp;{contactInfo.phone}
          </motion.a>
          <motion.a
            href={`mailto:${contactInfo.email}`}
            whileHover={{ scale: 1.02, borderColor: "#94a3b8" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="inline-flex h-12 items-center justify-center gap-2 border border-slate-600 px-7 text-sm font-semibold text-white"
          >
            <Mail size={15} />
            {contactInfo.email}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
