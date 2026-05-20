import { Mail, MapPin, Phone, Clock } from "lucide-react";
import {
  branches,
  contactInfo,
  courses,
  guidance,
  officialFees,
  schoolFees,
} from "./constants/mockData";

// ── Utility ────────────────────────────────────────────────────────────────

const czk = (n: number) =>
  n.toLocaleString("cs-CZ") + " Kč";

const tel = (phone: string) =>
  "+420" + phone.replace(/\s/g, "");

// ── Sub-components ─────────────────────────────────────────────────────────

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
      {children}
    </h2>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function Home() {
  const motorCourses = courses.filter((c) =>
    ["am", "a1", "a2", "a"].includes(c.id)
  );
  const carCourses = courses.filter((c) =>
    ["b", "b-rychlo", "kondice"].includes(c.id)
  );

  const courseB = courses.find((c) => c.id === "b")!;
  const courseQuick = courses.find((c) => c.id === "b-rychlo")!;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* ════════════════════════════════════ HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-baseline gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Autoškola
            </span>
            <span className="text-sm font-bold text-slate-900">
              {contactInfo.owner}
            </span>
          </a>
          <nav className="hidden items-center gap-5 sm:flex">
            <a
              href="#vycvik"
              className="text-xs font-medium uppercase tracking-wider text-slate-500 transition-colors hover:text-slate-900"
            >
              Skupiny
            </a>
            <a
              href="#poplatky"
              className="text-xs font-medium uppercase tracking-wider text-slate-500 transition-colors hover:text-slate-900"
            >
              Poplatky
            </a>
            <a
              href="#informace"
              className="text-xs font-medium uppercase tracking-wider text-slate-500 transition-colors hover:text-slate-900"
            >
              Informace
            </a>
            <a
              href={`tel:${tel(contactInfo.phone)}`}
              className="flex items-center gap-1.5 border border-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            >
              <Phone size={11} />
              {contactInfo.phone}
            </a>
          </nav>
          {/* Mobile phone link */}
          <a
            href={`tel:${tel(contactInfo.phone)}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-900 sm:hidden"
          >
            <Phone size={14} />
            {contactInfo.phone}
          </a>
        </div>
      </header>

      <main>
        {/* ════════════════════════════════════ HERO */}
        <section className="relative overflow-hidden bg-slate-900 px-6 pb-24 pt-20">
          {/* Subtle grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 48px)",
            }}
          />

          <div className="relative mx-auto max-w-6xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Výcvik skupin AM · A1 · A2 · A · B
            </p>
            <h1 className="mb-6 text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-8xl">
              Auto&shy;škola
              <br />
              <span className="text-slate-400">Kuchta</span>
            </h1>

            {/* Stat bar */}
            <div className="mb-8 flex flex-wrap gap-px">
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
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${tel(contactInfo.phone)}`}
                className="inline-flex items-center gap-2 border border-white bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                <Phone size={15} />
                Zavolat: {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-400"
              >
                <Mail size={15} />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════ BRANCHES */}
        <section
          id="provozovny"
          className="border-b border-slate-200 px-6 py-16"
        >
          <div className="mx-auto max-w-6xl">
            <SectionEyebrow>Provozovny</SectionEyebrow>
            <SectionHeading>Kde nás najdete</SectionHeading>

            <div className="mt-8 grid sm:grid-cols-2">
              {branches.map((branch, i) => (
                <div
                  key={branch.id}
                  className={[
                    "border border-slate-200 p-8",
                    i === 0 ? "sm:border-r-0" : "",
                  ].join(" ")}
                >
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    {branch.classroom}
                  </p>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-slate-400"
                    />
                    <div>
                      <p className="text-base font-semibold text-slate-900">
                        {branch.address}
                      </p>
                      {branch.note && (
                        <p className="mt-1 text-sm text-slate-500">
                          {branch.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════ COURSES */}
        <section id="vycvik" className="border-b border-slate-200 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <SectionEyebrow>Výcvik skupin</SectionEyebrow>
            <SectionHeading>Nabídka kurzů</SectionHeading>

            {/* ── Motocykly ── */}
            <div className="mt-10">
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Motocykly
              </h3>
              <div className="divide-y divide-slate-100 border border-slate-200">
                {motorCourses.map((course) => (
                  <div
                    key={course.id}
                    className="grid grid-cols-[56px_1fr_auto] items-center gap-x-6 px-6 py-4"
                  >
                    {/* Group badge */}
                    <span className="inline-flex h-8 w-14 items-center justify-center border border-slate-200 font-mono text-xs font-bold tracking-wider text-slate-700">
                      sk.&nbsp;{course.group}
                    </span>
                    {/* Title + meta */}
                    <div>
                      <p className="font-semibold leading-snug text-slate-900">
                        {course.title}
                      </p>
                      {course.meta && (
                        <p className="mt-0.5 text-sm text-slate-500">
                          {course.meta}
                        </p>
                      )}
                    </div>
                    {/* Age */}
                    <span className="whitespace-nowrap text-right text-sm text-slate-500">
                      {course.age}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Automobily a ostatní ── */}
            <div className="mt-8">
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Automobily a ostatní
              </h3>
              <div className="divide-y divide-slate-100 border border-slate-200">
                {carCourses.map((course) => (
                  <div
                    key={course.id}
                    className="grid grid-cols-[1fr_auto] items-start gap-6 px-6 py-5 sm:grid-cols-[56px_1fr_auto] sm:items-center"
                  >
                    {/* Group badge — hidden on mobile, visible sm+ */}
                    <span className="hidden h-8 w-14 items-center justify-center border border-slate-200 font-mono text-xs font-bold tracking-wider text-slate-700 sm:inline-flex">
                      sk.&nbsp;{course.group.split("–")[0].trim()}
                    </span>
                    {/* Title + meta */}
                    <div>
                      <p className="font-semibold leading-snug text-slate-900">
                        {course.title}
                      </p>
                      <p className="mt-0.5 font-mono text-xs text-slate-400 sm:hidden">
                        {course.group}
                      </p>
                      {course.meta && (
                        <p className="mt-0.5 text-sm text-slate-500">
                          {course.meta}
                        </p>
                      )}
                      {course.description && (
                        <p className="mt-0.5 text-sm text-slate-500">
                          {course.description}
                        </p>
                      )}
                      {course.timeframe && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                          <Clock size={11} />
                          {course.timeframe}
                        </p>
                      )}
                    </div>
                    {/* Price / age */}
                    <div className="shrink-0 text-right">
                      {course.price !== undefined ? (
                        <>
                          <p className="text-xl font-black tabular text-slate-900">
                            {czk(course.price)}
                          </p>
                          {course.age && (
                            <p className="mt-0.5 text-xs text-slate-400">
                              {course.age}
                            </p>
                          )}
                        </>
                      ) : (
                        <span className="text-sm text-slate-400">
                          {course.age ?? "Dle dohody"}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════ FEES */}
        <section
          id="poplatky"
          className="border-b border-slate-200 bg-slate-50 px-6 py-16"
        >
          <div className="mx-auto max-w-6xl">
            <SectionEyebrow>Poplatky</SectionEyebrow>
            <SectionHeading>Poplatky a sankce</SectionHeading>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {/* Official fees */}
              <div>
                <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Poplatky na magistrátu
                </h3>
                <div className="divide-y divide-slate-100 border border-slate-200 bg-white">
                  {officialFees.map((fee, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-4 px-5 py-3"
                    >
                      <span className="text-sm text-slate-700">
                        {fee.label}
                      </span>
                      <span className="shrink-0 font-mono text-sm font-semibold tabular text-slate-900">
                        {fee.amount.toLocaleString("cs-CZ")}&nbsp;{fee.currency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* School fees */}
              <div>
                <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Školní poplatky a sankce
                </h3>
                <div className="flex flex-col gap-3">
                  {schoolFees.map((fee, i) => (
                    <div
                      key={i}
                      className="border border-slate-200 bg-white px-5 py-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-semibold text-slate-900">
                          {fee.label}
                        </p>
                        <span className="shrink-0 font-mono text-base font-black tabular text-slate-900">
                          {czk(fee.fee)}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {fee.rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════ GUIDANCE */}
        <section
          id="informace"
          className="border-b border-slate-200 px-6 py-16"
        >
          <div className="mx-auto max-w-6xl">
            <SectionEyebrow>Jak se přihlásit</SectionEyebrow>
            <SectionHeading>Důležité informace</SectionHeading>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {guidance.map((item) => (
                <div
                  key={item.id}
                  className="border-l-[3px] border-slate-900 bg-slate-50 px-6 py-5"
                >
                  <p className="mb-2 text-sm font-bold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════ CONTACT CTA */}
        <section className="border-b border-slate-200 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <SectionEyebrow>Kontakt</SectionEyebrow>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Přihlásit se nebo se zeptat?
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Zavolejte nebo napište — rádi vám poradíme s výběrem skupiny.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:items-end">
                <a
                  href={`tel:${tel(contactInfo.phone)}`}
                  className="inline-flex items-center gap-2 border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
                >
                  <Phone size={15} />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
                >
                  <Mail size={15} />
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ════════════════════════════════════ FOOTER */}
      <footer className="bg-slate-900 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-3">
            {/* Brand */}
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Autoškola
              </p>
              <p className="text-base font-bold text-white">
                {contactInfo.owner}
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Kontakt
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${tel(contactInfo.phone)}`}
                  className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <Phone size={13} />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                >
                  <Mail size={13} />
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Branches */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Provozovny
              </p>
              <div className="flex flex-col gap-4">
                {branches.map((b) => (
                  <div key={b.id} className="flex items-start gap-2">
                    <MapPin
                      size={13}
                      className="mt-0.5 shrink-0 text-slate-500"
                    />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        {b.classroom}
                      </p>
                      <p className="text-sm text-slate-300">{b.address}</p>
                      {b.note && (
                        <p className="text-xs text-slate-500">{b.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} {contactInfo.owner} — Autoškola
          </div>
        </div>
      </footer>
    </div>
  );
}
