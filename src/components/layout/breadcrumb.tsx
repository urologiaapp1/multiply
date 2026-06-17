import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-brand-gray">
      <ol className="mx-auto flex max-w-7xl items-center gap-1.5 px-4 py-3 text-xs text-slate-500 lg:px-8">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="flex items-center gap-1 hover:text-brand-blue">
            <Home className="h-3.5 w-3.5" />
            Inicio
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-blue">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-brand-blue-dark">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
