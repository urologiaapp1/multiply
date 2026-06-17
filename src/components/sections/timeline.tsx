export function Timeline({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <ol className="relative space-y-8 border-l border-brand-blue/20 pl-6">
      {steps.map((step, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
            {i + 1}
          </span>
          <h3 className="font-semibold text-brand-blue-dark">{step.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
