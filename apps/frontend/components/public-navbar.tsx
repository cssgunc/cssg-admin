import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border-soft)] bg-[color:var(--color-surface-900)]/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center"
          aria-label="CSSG UNC home"
        >
          <Image
            src="/cssglogo.svg"
            alt="CSSG logo"
            width={120}
            height={44}
            className="h-10 w-auto opacity-90 grayscale brightness-[1.85] contrast-[0.7]"
            priority
          />
        </Link>

        <div className="order-3 flex w-full items-center justify-center gap-6 border-t border-white/10 pt-3 sm:order-2 sm:w-auto sm:flex-[0.72] sm:justify-evenly sm:border-t-0 sm:px-4 sm:pt-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition hover:text-[color:var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="order-2 ml-auto flex items-center gap-2 sm:order-3 sm:ml-0 sm:gap-3">
          <Link
            href="/login"
            className="rounded-full border border-cyan-200/30 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/60"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-[#082032] transition hover:bg-[color:var(--color-accent-strong)]"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
