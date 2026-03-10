import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CS + Social Good at UNC Chapel Hill, our mission, and how we build technology for community impact.",
};

const goals = [
  "Complete impactful, technically challenging projects for nonprofit clients, pro bono, to lighten the heavy burden these organizations face.",
  "Provide a space for students to learn about the intersection of computer science and social good, and to connect with other students who are interested in this field.",
  "Create opportunities for professional development and industry connections for our members, with an emphasis on partners who make a positive impact.",
];

const structureItems = [
  {
    title: "Projects",
    icon: "</>",
    description:
      "The projects team is responsible for building projects benefiting nonprofits in the Chapel Hill area and beyond.",
  },
  {
    title: "Education",
    icon: "Edu",
    description:
      "The education team is responsible for running semester-long classes to teach members the technical skills required for membership on a project team.",
  },
  {
    title: "Engagement",
    icon: "Com",
    description:
      "The engagement team is responsible for organizing events, performing marketing, and hosting workshops for our members.",
  },
  {
    title: "Strategy",
    icon: "Plan",
    description:
      "The strategy team is responsible for developing and executing the long-term vision and strategy for CS+SG.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-[calc(100vh)] overflow-hidden bg-[radial-gradient(circle_at_center,#2f6f9f_0%,#184566_40%,#081c2e_100%)]">
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-white">
        <section className="rounded-4xl border border-cyan-100/15 bg-white/92 px-6 py-10 text-slate-900 shadow-[0_25px_90px_rgba(4,18,33,0.22)] md:px-12 md:py-14">
          <h1 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">Our Goals</h1>

          <div className="mt-10 space-y-8 md:space-y-10">
            {goals.map((goal, index) => (
              <div
                key={goal}
                className="grid gap-3 md:grid-cols-[72px_1fr] md:items-start md:gap-10"
              >
                <div className="text-3xl font-bold leading-none text-(--color-accent) md:text-5xl">
                  {index + 1}
                </div>
                <p className="max-w-4xl text-base leading-8 text-slate-900 md:text-[1.45rem] md:leading-[1.45]">
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mx-auto my-8 h-10 w-full max-w-6xl rounded-full bg-[linear-gradient(90deg,#173654_0%,#245c83_50%,#173654_100%)] opacity-95" />

        <section className="rounded-4xl border border-cyan-100/15 bg-white/92 px-6 py-10 text-slate-900 shadow-[0_25px_90px_rgba(4,18,33,0.22)] md:px-12 md:py-14">
          <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">Our Structure</h2>
          <p className="mt-4 max-w-3xl text-sm text-slate-500 md:text-lg">
            CS+SG is comprised of a variety of components, each with a unique focus.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {structureItems.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-xl font-medium text-slate-950">{item.title}</h3>
                <div className="mt-4 text-xl font-bold uppercase tracking-wide text-(--color-accent)">
                  {item.icon}
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-500 md:text-base">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
