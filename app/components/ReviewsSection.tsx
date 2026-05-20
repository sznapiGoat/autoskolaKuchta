"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Tomáš Novák",
    course: "Skupina B",
    date: "únor 2025",
    text: "Výborná autoškola. Pan Kuchta je trpělivý instruktor, vše vysvětlí srozumitelně. Zkoušky jsem složil napoprvé. Vřele doporučuji!",
  },
  {
    id: 2,
    author: "Petra Horáčková",
    course: "Rychlokurz B",
    date: "leden 2025",
    text: "Rychlokurz za 6 týdnů proběhl přesně podle plánu. Organizace na výborné úrovni, flexibilní časové termíny. Průkaz mám a jsem spokojená.",
  },
  {
    id: 3,
    author: "Martin Vlček",
    course: "Skupina A2",
    date: "září 2024",
    text: "Motocyklový výcvik byl fantastický. Profesionální přístup, moderní technika, bezpečné prostředí. Jízdy jsem si opravdu užil.",
  },
  {
    id: 4,
    author: "Jana Procházková",
    course: "Skupina B",
    date: "prosinec 2024",
    text: "Skvělé zkušenosti s autoškolu Kuchta. Příjemné prostředí, vstřícný přístup a dobrá příprava na zkoušky. Jen to doporučit.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ReviewsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-bold text-foreground sm:text-6xl">
            Reference
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-px sm:grid-cols-2"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={card}
              className="border border-border bg-background p-8"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-accent-text text-accent-text"
                  />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-foreground/75 max-w-[55ch]">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {review.author}
                  </p>
                  <p className="text-xs text-muted">{review.course}</p>
                </div>
                <span className="text-xs text-muted">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
