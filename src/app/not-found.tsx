import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-green">Error 404</p>
      <h1 className="mt-2 text-3xl font-bold text-brand-blue-dark">Página no encontrada</h1>
      <p className="mt-4 max-w-md text-slate-600">
        La página que buscas no existe o fue movida. Puedes volver al inicio o explorar nuestras
        especialidades.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/especialidades">Ver especialidades</Link>
        </Button>
      </div>
    </div>
  );
}
