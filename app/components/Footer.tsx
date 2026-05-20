import { Mail, Phone, MapPin } from "lucide-react";
import { branches, contactInfo } from "../constants/mockData";

const currentYear = new Date().getFullYear();

const navLinks = [
  { href: "#kurzy", label: "Nabídka kurzů" },
  { href: "#prihlaska", label: "Online přihláška" },
  { href: "#poplatky", label: "Poplatky" },
  { href: "#instruktor", label: "O instruktorovi" },
  { href: "#pobocky", label: "Pobočky" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <p className="mb-1 font-display text-xl font-bold text-foreground">
              Autoškola <span className="text-accent-text">Kuchta</span>
            </p>
            <p className="mb-6 text-xs font-medium text-muted">
              {contactInfo.owner}
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:+420${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-muted hover:text-foreground transition-colors"
                >
                  <Phone size={13} className="text-accent-text" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted hover:text-foreground transition-colors"
                >
                  <Mail size={13} className="text-accent-text" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
              Navigace
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-muted">
              Pobočky
            </p>
            <ul className="space-y-5">
              {branches.map((branch) => (
                <li key={branch.id} className="flex items-start gap-2.5">
                  <MapPin size={13} className="mt-0.5 shrink-0 text-accent-text" />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-0.5">
                      {branch.classroom}
                    </p>
                    <p className="text-sm text-foreground/70">{branch.address}</p>
                    {branch.note && (
                      <p className="text-xs text-muted mt-0.5">{branch.note}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {currentYear} {contactInfo.owner}. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-muted">
            Výcvik skupin AM · A1 · A2 · A · B
          </p>
        </div>
      </div>
    </footer>
  );
}
