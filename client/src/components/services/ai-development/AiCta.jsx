import Image from "next/image";
import Button from "@/components/shared/Button";

export default function AiCta() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80"
        alt="AI concept background"
        fill
        className="object-cover opacity-20"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/80 to-ink" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ready to Build with AI?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
          Tell us what you&apos;re building. We&apos;ll show you how the
          strategy, the design, and the build come together to turn AI into real
          product value.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href="mailto:hello@pciapps.com" variant="primary" size="lg">
            Book a Call
          </Button>
          <Button href="/services" variant="outline" size="lg">
            All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
