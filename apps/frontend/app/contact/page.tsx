import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact CS + Social Good at UNC Chapel Hill for general questions, partnerships, and collaboration opportunities.",
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/cssgunc",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.79c-2.93.64-3.55-1.25-3.55-1.25-.48-1.22-1.17-1.54-1.17-1.54-.96-.65.07-.64.07-.64 1.07.07 1.63 1.1 1.63 1.1.94 1.62 2.47 1.15 3.07.88.1-.68.37-1.15.67-1.42-2.34-.27-4.81-1.17-4.81-5.22 0-1.15.41-2.08 1.08-2.82-.11-.27-.47-1.38.1-2.88 0 0 .88-.28 2.88 1.08a9.97 9.97 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.5.21 2.61.1 2.88.67.74 1.08 1.67 1.08 2.82 0 4.06-2.48 4.95-4.84 5.21.38.33.72.97.72 1.96v2.91c0 .28.19.62.73.51A10.5 10.5 0 0 0 12 1.5Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/unc-cs-social-good/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56C7.15 3.83 6.28 3 5.25 3S3.34 3.83 3.34 4.94c0 1.1.85 1.94 1.88 1.94h.03c1.04 0 1.91-.84 1.91-1.94ZM20.66 13.08c0-3.47-1.85-5.08-4.33-5.08-2 0-2.89 1.1-3.39 1.88V8.5H9.56c.04.91 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.67.12-.91.27-.67.89-1.36 1.93-1.36 1.36 0 1.91 1.03 1.91 2.54V20H20.3v-6.92c0-.37.01-.73.01-1Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/unc_cssg/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-none stroke-current stroke-[1.8]"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

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
              href="mailto:cssgunc@gmail.com"
              className="mt-4 inline-block text-sm font-medium text-[#63e8c7] underline-offset-4 transition hover:underline"
            >
              cssgunc@gmail.com
            </Link>
          </article>

          <article className="rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6">
            <h2 className="text-xl font-semibold text-[#63e8c7]">Socials</h2>
            <p className="mt-3 text-sm leading-6 text-white/80 md:text-base">
              Follow CS + Social Good online for updates on projects, events, and campus activity.
            </p>
            <div className="mt-5 space-y-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-cyan-100/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition hover:border-cyan-300/40 hover:text-[#63e8c7]"
                >
                  <span className="text-[#63e8c7]">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
