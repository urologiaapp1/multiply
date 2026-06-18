import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero({
  eyebrow,
  title,
  description,
  children,
  className,
  icon: Icon,
  iconAccent,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconAccent?: { bg: string; text: string };
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-brand-blue-light via-white to-white py-16 lg:py-24",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          {Icon && (
            <span
              className={cn(
                "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                iconAccent?.bg ?? "bg-brand-blue/10"
              )}
            >
              <Icon className={cn("h-6 w-6", iconAccent?.text ?? "text-brand-blue")} />
            </span>
          )}
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-green">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-bold leading-tight text-brand-blue-dark sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{description}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}
