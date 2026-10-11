import raw from "../data/products.json";

export type Product = (typeof raw)[number];

// Live products first; otherwise keep the order of products.json.
const rank = (p: Product) => (p.status === "Live" ? 0 : 1);
export const products: Product[] = raw
  .map((p, i) => ({ p, i }))
  .sort((a, b) => rank(a.p) - rank(b.p) || a.i - b.i)
  .map(({ p }) => p);

export const isLive = (p: Product) => p.status === "Live";
export const pad = (n: number) => String(n).padStart(2, "0");
