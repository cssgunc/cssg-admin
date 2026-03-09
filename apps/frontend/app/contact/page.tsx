import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative min-h-[calc(100vh)] overflow-hidden bg-[radial-gradient(circle_at_center,#2f6f9f_0%,#184566_40%,#081c2e_100%)]">
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-white">
        <h1 className="text-3xl font-bold text-[#63e8c7] md:text-4xl">Contact Us</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
          Interested in partnering with CS + Social Good or joining our team? Reach out and we can
          connect you with the right people.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6">
            <h2 className="text-xl font-semibold text-[#63e8c7]">General Inquiries</h2>
            <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
              For questions about meetings, membership, or events, email us and we will reply as
              soon as possible.
            </p>
            <Link
              href="mailto:cssgunc@example.com"
              className="mt-4 inline-block text-sm font-medium text-[#63e8c7] underline-offset-4 transition hover:underline"
            >
              cssgunc@example.com
            </Link>
          </article>

          <article className="rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6">
            <h2 className="text-xl font-semibold text-[#63e8c7]">Partnership Requests</h2>
            <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
              Nonprofits and mission-driven groups can share project ideas with our leadership
              board for future semester collaboration.
            </p>
            <Link
              href="mailto:partners@example.com"
              className="mt-4 inline-block text-sm font-medium text-[#63e8c7] underline-offset-4 transition hover:underline"
            >
              partners@example.com
            </Link>
          </article>
        </section>

        <div className="mt-10 rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6">
          <h3 className="text-lg font-semibold text-[#63e8c7]">Weekly Meetings</h3>
          <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
            Meetings are typically held during the semester at UNC Chapel Hill. Follow us on social
            channels for the latest updates on time and location.
          </p>
        </div>
      </div>
    </main>
  );
}
