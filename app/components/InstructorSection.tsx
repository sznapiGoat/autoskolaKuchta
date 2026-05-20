"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contactInfo } from "../constants/mockData";
import { Award, MapPin, Phone, Mail } from "lucide-react";

export function InstructorSection() {
  return (
    <section id="instruktor" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-bold text-foreground sm:text-6xl">
            Váš instruktor
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/kuchta2.avif"
              alt={contactInfo.owner}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1318]/60 via-transparent to-transparent" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h3 className="mb-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
              {contactInfo.owner}
            </h3>
            <p className="mb-8 text-sm font-medium uppercase tracking-widest text-accent-text">
              Vedoucí autoškoly & instruktor
            </p>

            <div className="space-y-4 text-sm text-foreground/70 leading-relaxed mb-10 max-w-[60ch]">
              <p>
                Autoškolu Kuchta provozuje Ing. Michael Kuchta — zkušený
                instruktor s dlouholetou praxí ve výcviku řidičů skupin AM, A
                a B v regionu Bučovice a Rousínov.
              </p>
              <p>
                Výuka probíhá individuálně, v přátelském prostředí a s důrazem
                na praktické dovednosti. Naším cílem je nejen připravit žáky
                na zkoušky, ale vychovat zodpovědné a sebejisté řidiče.
              </p>
              <p>
                Rychlokurz skupiny B zvládnete za pouhých 6 týdnů — ideální
                řešení pro ty, kteří potřebují řidičský průkaz co nejdříve.
              </p>
            </div>

            <ul className="space-y-3">
              {[
                {
                  icon: <Award size={15} />,
                  text: "Výcvik skupin AM · A1 · A2 · A · B",
                },
                {
                  icon: <MapPin size={15} />,
                  text: "Pobočky: Bučovice & Rousínov",
                },
                {
                  icon: <Phone size={15} />,
                  text: contactInfo.phone,
                  href: `tel:+420${contactInfo.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: <Mail size={15} />,
                  text: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                },
              ].map(({ icon, text, href }) => (
                <li key={text} className="flex items-center gap-3 text-sm">
                  <span className="text-accent-text">{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-foreground/70">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
