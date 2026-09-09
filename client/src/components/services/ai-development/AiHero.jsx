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
    </section>
  );
}
