import type { ReactNode } from "react";

type AboutCardProps = {
  title: string;
  icon: ReactNode;
  description: string;
};

export function AboutCard({ title, icon, description }: AboutCardProps) {
  return (
    <article className="flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
      <h3 className="text-xl font-medium text-slate-950">{title}</h3>
      <div className="text-(--color-accent) mt-4 text-xl font-bold uppercase tracking-wide">
        {icon}
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-500 md:text-base">{description}</p>
    </article>
  );
}
