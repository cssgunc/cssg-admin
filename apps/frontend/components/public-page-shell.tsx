import type { ReactNode } from "react";

type PublicPageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PublicPageLayout({ children }: PublicPageShellProps) {
  return (
    <main className="relative min-h-[calc(100vh)] overflow-hidden bg-[radial-gradient(circle_at_center,#2f6f9f_0%,#184566_40%,#081c2e_100%)]">
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 text-white">{children}</div>
    </main>
  );
}
