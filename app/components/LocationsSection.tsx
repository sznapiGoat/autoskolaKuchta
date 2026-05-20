"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { branches } from "../constants/mockData";

function cityName(address: string): string {
  return address.split(",").pop()?.trim() ?? address;
}

function mapsEmbedUrl(address: string): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&hl=cs&z=15&output=embed`;
}

export function LocationsSection() {
  const [activeId, setActiveId] = useState(branches[0].id);
  const active = branches.find((b) => b.id === activeId)!;

  return (
    <section id="pobocky" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-bold text-foreground sm:text-6xl">
            Pobočky
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="mb-8 inline-flex gap-0 border border-border">
          {branches.map((branch) => {
            const isActive = branch.id === activeId;
            return (
              <button
                key={branch.id}
                onClick={() => setActiveId(branch.id)}
                className="relative px-8 py-3 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-accent overflow-hidden"
              >
                {isActive && (
                  <motion.span
                    layoutId="loc-pill"
                    className="absolute inset-0 bg-accent"
                    transition={{ type: "spring", stiffness: 460, damping: 38 }}
                  />
                )}
                <span
                  className={[
                    "relative z-10 transition-colors duration-150",
                    isActive ? "text-white" : "text-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {cityName(branch.address)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Branch content */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="grid gap-0 lg:grid-cols-[1fr_1.6fr]">
              {/* Info panel */}
              <div className="border border-border bg-card p-8 flex flex-col gap-6">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-accent-text">
                    {active.classroom}
                  </p>
                  <div className="flex items-start gap-3 mt-3">
                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-muted"
                    />
                    <div>
                      <p className="font-semibold text-foreground">
                        {active.address}
                      </p>
                      {active.note && (
                        <p className="mt-1 text-sm text-muted">{active.note}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 shrink-0 text-muted" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1">
                      Výuka
                    </p>
                    <p className="text-sm text-foreground/70">
                      Dle individuální domluvy
                    </p>
                  </div>
                </div>

                {/* Rousínov tab shows photo */}
                {activeId === "rousinov" && (
                  <div className="relative aspect-video overflow-hidden mt-2">
                    <Image
                      src="/images/kuchta1.jpg"
                      alt="Rousínov — Sušilovo náměstí"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                  </div>
                )}
              </div>

              {/* Map */}
              <div className="relative min-h-[340px] border border-border border-l-0">
                <iframe
                  src={mapsEmbedUrl(active.address)}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 340, filter: "invert(0.9) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa — ${active.address}`}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
