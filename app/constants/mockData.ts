// ---------------------------------------------------------------------------
// Autoškola Ing. Michael Kuchta — canonical content source
// All client-verified copy lives here. Page components must import from this
// file; no strings, prices, or addresses belong in JSX directly.
// ---------------------------------------------------------------------------

export type ContactInfo = {
  owner: string;
  email: string;
  phone: string;
  website: string;
};

export type Branch = {
  id: string;
  classroom: string;
  address: string;
  note?: string;
};

export type Course = {
  id: string;
  group: string;
  title: string;
  price?: number;
  meta?: string;
  age?: string;
  timeframe?: string;
  description?: string;
};

export type OfficialFee = {
  label: string;
  amount: number;
  currency: "Kč";
};

export type SchoolFee = {
  label: string;
  fee: number;
  rule: string;
};

export type GuidanceItem = {
  id: string;
  title: string;
  body: string;
};

// ── Contact ────────────────────────────────────────────────────────────────

export const contactInfo: ContactInfo = {
  owner: "Ing. Michael Kuchta",
  email: "autoskola-kuchta@email.cz",
  phone: "603 494 096",
  website: "www.autoskola-kuchta@email.cz",
};

// ── Branches (Provozovny) ──────────────────────────────────────────────────

export const branches: Branch[] = [
  {
    id: "bucovice",
    classroom: "Provozovna I",
    address: "Komenského 211, Bučovice",
    note: "Vchod ze dvora",
  },
  {
    id: "rousinov",
    classroom: "Provozovna II",
    address: "Sušilovo náměstí 23, Rousínov",
  },
];

// ── Courses (Výcvik skupin) ────────────────────────────────────────────────

export const courses: Course[] = [
  {
    id: "am",
    group: "AM",
    title: "Moped / Motocykly do 50 ccm",
    meta: "Max. rychlost do 45 km/h",
    age: "Od 15 let",
  },
  {
    id: "a1",
    group: "A1",
    title: "Motocykly do 125 ccm",
    meta: "Výkon do 11 kW",
    age: "Od 16 let",
  },
  {
    id: "a2",
    group: "A2",
    title: "Motocykly nad 125 ccm",
    meta: "S omezením výkonu do 35 kW",
    age: "Od 18 let",
  },
  {
    id: "a",
    group: "A",
    title: "Motocykly bez omezení",
    meta: "Od 24 let (nebo po 2 letech od získání sk. A2)",
    age: "Od 24 let",
  },
  {
    id: "b",
    group: "B",
    title: "Automobily do 3,5 t",
    price: 19000,
    meta: "Možnost zkoušek od 17 let v režimu L17",
    age: "Od 17/18 let",
  },
  {
    id: "b-rychlo",
    group: "B – Rychlokurz",
    title: "Rychlokurz skupiny B",
    price: 26000,
    timeframe: "6 týdnů",
    description: "Expresní výcvik s maximální časovou flexibilitou.",
  },
  {
    id: "kondice",
    group: "Kondiční jízdy",
    title: "Kondiční jízdy",
    description:
      "Školení řidičů, kondiční jízdy a vrácení zadrženého řidičského průkazu.",
  },
];

// ── Official Magistrát Fees (Poplatky na MÚ) ──────────────────────────────

export const officialFees: OfficialFee[] = [
  {
    label: "Závěrečná zkouška (řádný termín)",
    amount: 700,
    currency: "Kč",
  },
  {
    label: "Opravná zkouška – jízda",
    amount: 400,
    currency: "Kč",
  },
  {
    label: "Opravná zkouška – test",
    amount: 100,
    currency: "Kč",
  },
  {
    label: "Vystavení ŘP",
    amount: 200,
    currency: "Kč",
  },
];

// ── Internal School Fees & Rules (Školní řád a sankce) ────────────────────

export const schoolFees: SchoolFee[] = [
  {
    label: "Pozdní omluva hodiny",
    fee: 500,
    rule: "Pokud se student neomluví z plánované lekce dříve než 1 hodinu před jejím začátkem, účtuje se pokuta 500 Kč.",
  },
  {
    label: "Opravná závěrečná zkouška (autoškole)",
    fee: 600,
    rule: "Poplatek autoškole za organizaci opravné závěrečné zkoušky činí 600 Kč.",
  },
  {
    label: "Storno nebo převod",
    fee: 3000,
    rule: "Poplatek za storno rozpracovaného kurzu nebo převod k jiné autoškole činí 3 000 Kč.",
  },
];

// ── Student Guidance (Jak se přihlásit & FAQ) ─────────────────────────────

export const guidance: GuidanceItem[] = [
  {
    id: "payment",
    title: "Platba a zálohy",
    body: "Výcvik není nutné platit ihned celý při zahájení kurzu. Je možné ho uhradit formou splátek. Podmínkou je zaplacení zálohy nejpozději při plánování první praktické jízdy.",
  },
  {
    id: "age",
    title: "Věková podmínka přihlášení",
    body: "Přihlásit se lze cca 2 měsíce před dosažením stanoveného věku, podmínkou je věk splnit v době závěrečných zkoušek.",
  },
  {
    id: "weather",
    title: "Motocyklový výcvik a počasí",
    body: "Výcvik a zkoušky na motocykly (AM, A1, A2, A) jsou závislé na počasí. Přihlášky doporučujeme podávat nejpozději do poloviny září, aby zkoušky proběhly do konce října.",
  },
];
