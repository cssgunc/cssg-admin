// Cards in Contact and Projects pages

import type { ReactNode } from "react";

type PublicInfoCardProps = {
  title: string;
  children: ReactNode;
};

export function PublicInfoCard({ title, children }: PublicInfoCardProps) {
  return (
    <article className="rounded-2xl border border-cyan-100/15 bg-cyan-100/5 p-6">
      <h2 className="text-xl font-semibold text-[#63e8c7]">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-white/80 md:text-base">{children}</div>
    </article>
  );
}
