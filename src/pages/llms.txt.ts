// /llms.txt: a plain-text map of the site for AI assistants (llmstxt.org), built from the same data as the pages.
import type { APIRoute } from "astro";
import site from "../data/site.json";
import lab from "../data/lab.json";
import { products, isLive } from "../lib/products";

export const GET: APIRoute = ({ site: base }) => {
  const url = (path: string) => new URL(path, base).toString();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.legalName}, ${site.address}. Contact: ${site.email}.`,
    "",
    "## Products",
    "",
    ...products.map((p) => `- [${p.name}](${url(`/products/${p.slug}/`)}): ${p.tagline}.${isLive(p) && p.ctaUrl ? ` Live at ${p.ctaUrl}` : ` ${p.status}.`}`),
    "",
    "## Lab",
    "",
    `- [Lab](${url("/lab/")}): ${lab.intro.lead}`,
    ...lab.experiments.map((e) =>
      [
        `- [${e.name}](${e.links.try}) (${e.id}, ${e.kind.toLowerCase()}, ${e.status.toLowerCase()}): ${e.summary}`,
        ...e.setup.map((s) => `  - ${s.label}: ${s.value}`),
        ...(e.links.source ? [`  - Source: ${e.links.source}`] : []),
        ...(e.links.selfHost ? [`  - Run your own copy: ${e.links.selfHost}`] : []),
      ].join("\n"),
    ),
    "",
    "## More",
    "",
    `- [Services](${url("/services/")}): how we help teams put private AI to work`,
    `- [About](${url("/about/")})`,
    `- [Support](${url("/support/")})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
