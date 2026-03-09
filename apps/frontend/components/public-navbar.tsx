import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function PublicNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-100/10 bg-[#0b2031]/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-base font-semibold tracking-wide text-[#63e8c7]">
          CSSG UNC
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition hover:text-[#63e8c7]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-cyan-200/30 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/60"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#63e8c7] px-4 py-2 text-sm font-semibold text-[#082032] transition hover:bg-[#7ff2d6]"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
