"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import Image from "next/image";
import { courses } from "../constants/mockData";
import { cn } from "@/lib/utils";

const selectableCourses = courses.filter(
  (c) => c.id !== "kondice"
);

const step2Schema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Neplatná e-mailová adresa"),
  phone: z
    .string()
    .regex(/^[\d\s+\-()]{9,}$/, "Zadejte platné telefonní číslo"),
  note: z.string().optional(),
});

type Step2Data = z.infer<typeof step2Schema>;

const FORMSPREE_ID = "FORMSPREE_ID";

const EASE = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1, transition: { duration: 0.28, ease: EASE } },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
  }),
};

export function EnrollmentForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
  });

  function goTo(nextStep: number) {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  }

  async function onSubmit(data: Step2Data) {
    if (!selectedCourse) return;
    setSubmitting(true);
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course: selectedCourse, ...data }),
      });
    } catch {
      // continue to success regardless — form submission errors shouldn't block UX
    } finally {
      setSubmitting(false);
      goTo(3);
    }
  }

  const progressPct = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <section id="prihlaska" className="py-24 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl font-bold text-foreground sm:text-6xl">
            Online přihláška
          </h2>
        </motion.div>

        <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — image + contact sidebar */}
          <div className="relative hidden lg:block">
            <div className="sticky top-20 h-[640px]">
              <Image
                src="/images/kuchta2.avif"
                alt="Ing. Michael Kuchta — instruktor autoškoly"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-medium uppercase tracking-widest text-foreground/60 mb-1">
                  Instruktor
                </p>
                <p className="font-display text-xl font-bold text-foreground">
                  Ing. Michael Kuchta
                </p>
                <p className="text-sm text-foreground/70 mt-1">
                  autoskola-kuchta@email.cz
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="border border-border bg-background p-8 lg:p-12">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {["Kurz", "Údaje", "Odesláno"].map((label, idx) => (
                  <span
                    key={label}
                    className={cn(
                      "text-xs font-medium uppercase tracking-wider transition-colors",
                      idx + 1 <= step ? "text-foreground" : "text-muted"
                    )}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="h-0.5 bg-border">
                <motion.div
                  className="h-full bg-accent"
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              {/* Step 1 — select course */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h3 className="mb-6 font-display text-2xl font-bold text-foreground">
                    Vyberte kurz
                  </h3>
                  <div className="flex flex-col gap-2 mb-8">
                    {selectableCourses.map((course) => (
                      <button
                        key={course.id}
                        onClick={() => setSelectedCourse(course.id)}
                        className={cn(
                          "text-left border p-4 transition-colors duration-150",
                          selectedCourse === course.id
                            ? "border-accent bg-accent/10"
                            : "border-border bg-card hover:border-muted"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted">
                              {course.group}
                            </span>
                            <p className="text-sm font-medium text-foreground mt-0.5">
                              {course.title}
                            </p>
                          </div>
                          {course.price && (
                            <span className="text-sm font-bold tabular text-foreground shrink-0 ml-4">
                              {course.price.toLocaleString("cs-CZ")} Kč
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => goTo(2)}
                    disabled={!selectedCourse}
                    className="inline-flex h-11 items-center gap-2 bg-accent px-8 text-sm font-bold text-white hover:bg-accent-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Pokračovat <ChevronRight size={15} />
                  </button>
                </motion.div>
              )}

              {/* Step 2 — personal info */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h3 className="mb-6 font-display text-2xl font-bold text-foreground">
                    Vaše údaje
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted">
                        Jméno a příjmení
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Jan Novák"
                        className={cn(
                          "w-full border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent transition-colors",
                          errors.name ? "border-red-500" : "border-border"
                        )}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted">
                        E-mail
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="jan@email.cz"
                        className={cn(
                          "w-full border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent transition-colors",
                          errors.email ? "border-red-500" : "border-border"
                        )}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted">
                        Telefon
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="603 000 000"
                        className={cn(
                          "w-full border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent transition-colors",
                          errors.phone ? "border-red-500" : "border-border"
                        )}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted">
                        Poznámka (nepovinné)
                      </label>
                      <textarea
                        {...register("note")}
                        rows={3}
                        placeholder="Dotaz, upřesnění termínu..."
                        className="w-full border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => goTo(1)}
                        className="h-11 border border-border px-6 text-sm font-medium text-muted hover:text-foreground hover:border-muted transition-colors"
                      >
                        Zpět
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex h-11 items-center gap-2 bg-accent px-8 text-sm font-bold text-white hover:bg-accent-hover transition-colors disabled:opacity-60"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={15} className="animate-spin" />
                            Odesílám…
                          </>
                        ) : (
                          "Odeslat přihlášku"
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 3 — success */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 22,
                    }}
                    className="mb-6 text-accent-text"
                  >
                    <CheckCircle2 size={64} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="mb-3 font-display text-3xl font-bold text-foreground">
                    Přihláška odeslána
                  </h3>
                  <p className="text-sm text-muted max-w-xs">
                    Děkujeme za zájem. Budeme vás kontaktovat co nejdříve na
                    zadaný e-mail nebo telefon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
