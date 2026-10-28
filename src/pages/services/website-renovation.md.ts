// Plain-text twin of /services/website-renovation, for AI assistants. Built from the same data as the page.
import type { APIRoute } from "astro";
import site from "../../data/site.json";
import r from "../../data/renovation.json";

export const GET: APIRoute = ({ site: base }) => {
  const page = new URL(`/services/${r.slug}`, base).toString();
  const lines = [
    `# ${r.name}`,
    "",
    `> ${r.description}`,
    "",
    r.lead,
    "",
    "## How it works",
    "",
    ...r.steps.map((s, i) => `${i + 1}. **${s.title}.** ${s.body}`),
    "",
    "## What is included",
    "",
    ...r.deliverables.map((d) => `- ${d}`),
    "",
    "## Who it is for",
    "",
    r.audience,
    "",
    "## Questions",
    "",
    ...r.faq.flatMap((f) => [`**${f.q}**`, f.a, ""]),
    "## Contact",
    "",
    `${site.name}, ${site.address}. Email: ${site.email}. Page: ${page}`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
