"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Clock, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { contactInfo, courses } from "../constants/mockData";

const czk = (n: number) => n.toLocaleString("cs-CZ") + " Kč";

const courseB = courses.find((c) => c.id === "b")!;
const courseQuick = courses.find((c) => c.id === "b-rychlo")!;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.1 },
  }),
};

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-start justify-end overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: imageY }}
      >
        <Image
          src="/images/kuchta1.jpg"
          alt="Autoškola Kuchta – výcvikové vozidlo"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-[#0a0d12]/70 to-[#0a0d12]/20" />
      </motion.div>

      {/* Red accent line at top */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-accent z-10" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-24">
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 font-display text-7xl font-bold leading-[0.92] tracking-tight text-foreground sm:text-8xl lg:text-9xl"
        >
          Auto&shy;škola
          <br />
          <span className="text-foreground/50">Kuchta</span>
        </motion.h1>

        {/* Stats row */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-10 flex flex-wrap gap-px"
        >
          {[
            { label: "Skupina B", value: czk(courseB.price!) },
            { label: "Rychlokurz B", value: czk(courseQuick.price!) },
            {
              label: "Rychlokurz za",
              value: courseQuick.timeframe,
              icon: <Clock size={14} className="inline mr-1 text-muted-light" />,
            },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              className="border border-border bg-card/80 backdrop-blur-sm px-5 py-3"
            >
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted">
                {label}
              </p>
              <p className="mt-0.5 text-lg font-bold tabular text-foreground">
                {icon}
                {value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={`tel:+420${contactInfo.phone.replace(/\s/g, "")}`}
            className="inline-flex h-12 items-center justify-center gap-2.5 bg-accent px-8 text-sm font-bold text-white hover:bg-accent-hover transition-colors duration-150"
          >
            <Phone size={15} />
            Zavolat: {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex h-12 items-center justify-center gap-2.5 border border-border/80 bg-card/60 backdrop-blur-sm px-8 text-sm font-semibold text-muted-light hover:text-foreground hover:border-muted transition-colors duration-150"
          >
            <Mail size={15} />
            {contactInfo.email}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#kurzy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted hover:text-foreground transition-colors"
        aria-label="Přejít na kurzy"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">
          Kurzy
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
