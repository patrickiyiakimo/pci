const clients = [
  { name: "Valara", href: "/work/valara" },
  { name: "WWF", href: "/work/wwf" },
  { name: "Root", href: "/work/root" },
  { name: "PredictionStrike", href: "/work/prediction-strike" },
  { name: "WHO", href: null },
  { name: "Mural", href: null },
];

export default function ClientMarquee() {
  return (
    <section className="border-t border-navy-light bg-navy/95">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-slate">
          Trusted by teams across industries
        </p>
        <div
          className="mt-6 flex overflow-hidden [clip-path:inset(0)] gap-8"
          aria-label="Client logos"
        >
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`${client.name}-${i}`}
              className="whitespace-nowrap text-xl font-bold tracking-tight text-ice/50"
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}