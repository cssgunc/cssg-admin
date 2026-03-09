import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore project areas where CS + Social Good partners with organizations to deliver practical technology solutions.",
};

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
          <article className="rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6">
            <h2 className="text-xl font-semibold text-[#63e8c7]">Nonprofit Web Platforms</h2>
            <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
              Student teams design and ship modern websites and dashboards so organizations can
              better manage outreach, volunteers, and resources.
            </p>
          </article>

          <article className="rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6">
            <h2 className="text-xl font-semibold text-[#63e8c7]">Operations Tools</h2>
            <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
              We build internal tools that automate repetitive workflows and help partner teams
              spend more time on mission-focused programs.
            </p>
          </article>

          <article className="rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6">
            <h2 className="text-xl font-semibold text-[#63e8c7]">Data for Social Good</h2>
            <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
              Our members support data collection and analytics projects that generate actionable
              insights for community impact initiatives.
            </p>
          </article>

          <article className="rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6">
            <h2 className="text-xl font-semibold text-[#63e8c7]">Student-Led Innovation</h2>
            <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
              Every semester, students work in cross-functional teams to deliver scoped products
              from discovery through launch for real-world partners.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
