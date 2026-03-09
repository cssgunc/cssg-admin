import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CS + Social Good at UNC Chapel Hill, our mission, and how we build technology for community impact.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-[calc(100vh)] overflow-hidden bg-[radial-gradient(circle_at_center,#2f6f9f_0%,#184566_40%,#081c2e_100%)]">
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-center text-white">
        {/* Page title */}
        <h1 className="text-3xl font-bold text-[#63e8c7] md:text-4xl">About CS + Social Good</h1>

        {/* Intro paragraph */}
        <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-white/85 md:text-xl">
          CS + Social Good at the University of North Carolina at Chapel Hill is a student
          organization dedicated to using technology to create meaningful impact in our communities.
        </p>

        {/* Mission section */}
        <section className="mx-auto mt-16 max-w-4xl rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-8 text-left">
          <h2 className="text-2xl font-bold text-[#63e8c7] md:text-3xl">Our Mission</h2>

          <p className="mt-6 text-base leading-8 text-white/85 md:text-lg">
            Through technology, we have the opportunity to be a part of the positive change and
            evolution of a growing world of possibility. We aim to give nonprofits and organizations
            for social good in the Chapel Hill area the tools to effectively complete their goals
            with the use of knowledge and programs. We partner with 4-5 organizations per semester
            and develop custom technology solutions for their needs. These groups include 501(c)
            organizations, student groups, and Ph.D. candidates.
          </p>
        </section>
      </div>
    </main>
  );
}
