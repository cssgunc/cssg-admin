import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore project areas where CS + Social Good partners with organizations to deliver practical technology solutions.",
};

const projects = [
  {
    title: "Breast Cancer Hub",
    description:
      "BCH Know Your Breasts is a free mobile app developed by CS+SG in collaboration with Breast Cancer Hub. It's a tool that helps women examine their breasts and detect abnormalities, keeping track of previous examinations and providing reminders when new examinations are due. It also allows users to share their results and get actionable next-step recommendations based on reported symptoms.",
  },
  {
    title: "CATCH",
    description:
      "A homepage and shop for CATCH (Carolina Adapts Toys for Children), a non-profit organization that provides adaptive toys to children with special needs.",
  },
  {
    title: "Beautiful Together",
    description:
      "A website for Beautiful Together, a non-profit organization matching pets with potential adopters in a tinder style, giving animals a shot at finding their forever home.",
  },
  {
    title: "Lemkin AI",
    description:
      "Designed and prototyped a web app for Lemkin AI, a platform allowing human rights organizations to analyze evidence, identify patterns, and make informed decisions in building cases across borders.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-[calc(100vh)] overflow-hidden bg-[radial-gradient(circle_at_center,#2f6f9f_0%,#184566_40%,#081c2e_100%)]">
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-white">
        <h1 className="text-3xl font-bold text-[#63e8c7] md:text-4xl">Projects</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
          We collaborate with nonprofits, student organizations, and research groups to build
          practical software that supports social impact work across our community.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6"
            >
              <h2 className="text-xl font-semibold text-[#63e8c7]">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">{project.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
