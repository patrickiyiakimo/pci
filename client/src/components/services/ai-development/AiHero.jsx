import Image from "next/image";
import Button from "@/components/shared/Button";

export default function AiHero() {
  return (
    <section className="relative overflow-hidden bg-base">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-tight text-contrast">
            AI Product Development.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-grey-600 sm:text-lg lg:text-xl">
            We help organizations turn AI into real products, workflows, and
            systems that drive measurable outcomes. From defining high-impact
            opportunities to designing experiences and building scalable
            solutions, our approach ensures AI is applied with purpose. Every
            engagement is grounded in strategy, aligned to business goals, and
            built to perform in real-world conditions.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button href="mailto:hello@pciapps.com" variant="primary" size="lg">
              Book a Strategy Call
            </Button>
            <Button href="/services" variant="outline" size="lg">
              All Services
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-ink">
          {/* <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80"
            alt="AI neural network visualization"
            width={1600}
            height={900}
            className="h-[320px] w-full object-cover opacity-70 sm:h-[420px] lg:h-[500px]"
            priority
          /> */}
          {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" /> */}
          {/* <div className="absolute inset-0 grid-overlay opacity-30" /> */}

          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-14">
            <div className="flex flex-wrap gap-3">
              {["Strategy", "Design", "Build", "Optimize"].map((step) => (
                <span
                  key={step}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}