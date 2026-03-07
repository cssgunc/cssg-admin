"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8787"}/health`
      );
      const data = await res.json();
      console.log(data);
      setData(data.message);
    };

    fetchData();
  }, []);

  return (
    <section className="overflow relative min-h-[calc(100vh)] bg-[radial-gradient(circle_at_center,#2f6f9f_0%,#184566_40%,#081c2e_100%)]">
      {/* soft dark edges */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh)] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
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
        </div>
      </div>
    </section>
  );
}
