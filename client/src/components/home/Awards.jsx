const awards = [
  {
    year: "2026",
    title: "Clutch Top 100 Fastest Growing Companies",
    icon: "C",
  },
  {
    year: "2026",
    title: "50Pros Top 10 Global Leader",
    icon: "P",
  },
  {
    year: "2025",
    title: "The Manifest Most Reviewed UX Company",
    icon: "M",
  },
  {
    year: "2024",
    title: "Inc. 5000 Fastest-Growing Companies",
    icon: "F",
  },
];

export default function Awards() {
  return (
    <section className="border-t border-grey-200 bg-base relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, #16a34a 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-contrast sm:text-4xl lg:text-5xl">
            Proven Expertise. Globally Accredited.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-grey-600 sm:text-lg">
            Our work is recognized by industry leaders around the world. We
            measure success in outcomes — and the recognition follows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <div
              key={award.title}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-grey-200 bg-base-v2 px-6 py-8 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/60 text-2xl font-bold text-accent">
                {award.icon}
              </span>
              <p className="text-sm font-semibold text-accent">{award.year}</p>
              <h3 className="mt-1 text-base font-medium text-contrast">
                {award.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
