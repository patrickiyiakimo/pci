import Button from "@/components/shared/Button";

const designServices = [
  {
    title: "High-Fidelity Figma Prototypes",
    description:
      "Pixel-perfect, interactive prototypes that show exactly what we'll build — before we write a single line of code.",
  },
  {
    title: "Design Systems & Component Libraries",
    description:
      "Reusable, scalable UI kits that keep your product consistent as it grows across every screen and feature.",
  },
  {
    title: "UX Research & User Flows",
    description:
      "We map every journey and pressure-test the experience against real user behavior, so the design works before it ships.",
  },
  {
    title: "Iterative Design Sprints",
    description:
      "Fast feedback loops that refine the design with you every step of the way — no surprises at launch, ever.",
  },
];

export default function DesignService() {
  return (
    <section className="relative border-t border-grey-200 bg-green-800 [clip-path:polygon(0_2.5rem,100%_0,100%_calc(100%-3.5rem),0_100%)] sm:[clip-path:polygon(0_4.5rem,100%_0,100%_calc(100%-6.5rem),0_100%)]">
      <div
        className="pointer-events-none absolute inset-0 grid-overlay opacity-20"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-32 lg:pt-36 lg:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              No Figma File? No Problem.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              If you don&apos;t have a design ready, we&apos;ll create one for
              you. Bring us your idea, and our product designers will shape it
              into a polished, high-fidelity experience before development
              begins — so you always know exactly what you&apos;re getting.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              It&apos;s design and build under one roof: no back-and-forth
              between agencies, no gaps between the mockup and the final
              product. Just a clear, professional path from concept to launch.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                href="/services/design"
                variant="outline-light"
                size="lg"
              >
                Explore Design Services
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 border-b border-white/15 pb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.4 0 4-.9 4-2.1 0-.5-.2-1-.6-1.4-.4-.4-.6-.9-.6-1.4 0-.6.6-1.2 1.6-1.2H16c3 0 5-2.5 5-5.7C21 5.8 17.2 2 12 2z" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-white">
                  Design Approval Flow
                </p>
                <p className="text-xs text-white/60">
                  From first sketch to final handoff
                </p>
              </div>
            </div>

            <ul className="mt-2">
              {designServices.map((service) => (
                <li
                  key={service.title}
                  className="group -mx-3 rounded-xl border-b border-white/10 px-3 py-6 transition-colors duration-300 last:border-b-0 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors duration-300 group-hover:bg-accent-400 group-hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}