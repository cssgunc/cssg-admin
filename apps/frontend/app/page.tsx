import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "CS + Social Good at UNC Chapel Hill empowers students to build technology for meaningful community impact.",
};

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh)] overflow-hidden bg-[radial-gradient(circle_at_center,#2f6f9f_0%,#184566_40%,#081c2e_100%)]">
      {/* soft dark edges */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <Image
          src="/cssglogo.svg"
          alt="CSSG logo"
          width={450}
          height={450}
          className="mx-auto mb-8"
        />

        <div className="mb-8 rounded-xl border border-cyan-400/10 bg-cyan-400/10 px-4 py-2 text-base text-cyan-200 shadow-sm md:text-lg">
          at the University of North Carolina at Chapel Hill 🐐
        </div>

        <div className="max-w-4xl text-center">
          <p className="text-xl text-[#63e8c7]">CS + Social Good</p>

          <p className="mt-1 text-xl leading-7 text-white/85">
            is a student organization dedicated to using our technical skills, time, and resources
            to make a positive impact on our campus, in our community, and in the world.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/about"
            className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-8 py-3 text-base font-medium text-cyan-300 transition hover:bg-cyan-400/20"
          >
            About Us
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-cyan-400/30 px-8 py-3 text-base font-medium text-white/90 transition hover:border-cyan-300/60 hover:text-cyan-200"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
