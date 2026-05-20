"use client";

import { motion } from "framer-motion";
import { courses } from "../constants/mockData";
import { cn } from "@/lib/utils";

const czk = (n: number) => n.toLocaleString("cs-CZ") + " Kč";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function CoursesSection() {
  const motorCourses = courses.filter((c) =>
    ["am", "a1", "a2", "a"].includes(c.id)
  );
  const bCourse = courses.find((c) => c.id === "b")!;
  const quickCourse = courses.find((c) => c.id === "b-rychlo")!;
  const extraCourses = courses.filter((c) => c.id === "kondice");

  return (
    <section id="kurzy" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-bold text-foreground sm:text-6xl">
            Nabídka kurzů
          </h2>
        </motion.div>

        {/* Group B featured cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 grid gap-px sm:grid-cols-2"
        >
          {/* Skupina B */}
          <motion.div
            variants={item}
            className="group relative border border-border bg-card p-8 hover:bg-card-hover transition-colors duration-200"
          >
            <div className="absolute top-0 left-0 h-0.5 w-16 bg-accent" />
            <span className="inline-block mb-4 border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted">
              Skupina B
            </span>
            <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
              {bCourse.title}
            </h3>
            {bCourse.meta && (
              <p className="mb-4 text-sm text-muted">{bCourse.meta}</p>
            )}
            <div className="mt-auto flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted">
                  Cena kurzu
                </p>
                <p className="text-3xl font-bold tabular text-foreground">
                  {czk(bCourse.price!)}
                </p>
              </div>
              {bCourse.age && (
                <span className="text-sm text-muted">{bCourse.age}</span>
              )}
            </div>
          </motion.div>

          {/* Rychlokurz B */}
          <motion.div
            variants={item}
            className="group relative border border-accent/40 bg-accent/5 p-8 hover:bg-accent/10 transition-colors duration-200"
          >
            <div className="absolute top-0 left-0 h-0.5 w-full bg-accent" />
            <span className="inline-block mb-4 border border-accent/40 bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              Rychlokurz
            </span>
            <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
              {quickCourse.title}
            </h3>
            {quickCourse.description && (
              <p className="mb-4 text-sm text-muted">
                {quickCourse.description}
              </p>
            )}
            <div className="mt-auto flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted">
                  Cena kurzu
                </p>
                <p className="text-3xl font-bold tabular text-foreground">
                  {czk(quickCourse.price!)}
                </p>
              </div>
              {quickCourse.timeframe && (
                <span className="text-sm font-medium text-accent-text">
                  za {quickCourse.timeframe}
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Motocyklové skupiny */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">
            Motocyklové skupiny
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4"
        >
          {motorCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={item}
              className="border border-border bg-card p-6 hover:bg-card-hover transition-colors duration-200"
            >
              <span className="mb-3 inline-flex items-center justify-center border border-border px-2.5 py-2 text-sm font-bold text-foreground min-w-[2.25rem]">
                {course.group}
              </span>
              <h3 className="mb-1 text-sm font-semibold text-foreground leading-snug">
                {course.title}
              </h3>
              {course.meta && (
                <p className="text-xs text-muted">{course.meta}</p>
              )}
              {course.age && (
                <p className="mt-3 text-[11px] font-medium uppercase tracking-wider text-muted">
                  {course.age}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Kondiční jízdy */}
        {extraCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="border border-border bg-card p-6"
          >
            <div className="flex items-start gap-4">
              <span className="shrink-0 border border-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-muted">
                Doplňkově
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{course.title}</h3>
                {course.description && (
                  <p className="mt-1 text-sm text-muted">{course.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
