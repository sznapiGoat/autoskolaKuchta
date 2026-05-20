"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { branches } from "../constants/mockData";

// Extract city name from "Street 123, City" → "City"
function cityName(address: string): string {
  return address.split(",").pop()?.trim() ?? address;
}

export function BranchSwitcher() {
  const [activeId, setActiveId] = useState<string>(branches[0].id);
  const active = branches.find((b) => b.id === activeId)!;

  return (
    <div className="mt-8">
      {/* ── Segment control ── */}
      <div className="mb-6 inline-flex gap-0.5 border border-slate-200 bg-slate-100 p-0.5">
        {branches.map((branch) => {
          const isActive = branch.id === activeId;
          return (
            <button
              key={branch.id}
              onClick={() => setActiveId(branch.id)}
              className="relative px-7 py-2.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-slate-900"
            >
              {isActive && (
                <motion.span
                  layoutId="branch-pill"
                  className="absolute inset-0 bg-slate-900"
                  transition={{ type: "spring", stiffness: 480, damping: 40 }}
                />
              )}
              <span
                className={[
                  "relative z-10 transition-colors duration-150",
                  isActive ? "text-white" : "text-slate-500 hover:text-slate-800",
                ].join(" ")}
              >
                {cityName(branch.address)}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Branch detail card — fades between branches ── */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <div className="border border-slate-200 p-8">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {active.classroom}
            </p>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-slate-400" />
              <div>
                <p className="text-base font-semibold text-slate-900">
                  {active.address}
                </p>
                {active.note && (
                  <p className="mt-1 text-sm text-slate-500">{active.note}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
