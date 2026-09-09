import Button from "@/components/shared/Button";

export default function LetsTalk() {
  return (
    <section className="relative overflow-hidden bg-base">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, #16a34a 0%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-contrast sm:text-5xl lg:text-6xl">
          Let&apos;s Talk
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-grey-600 sm:text-lg">
          Tell us what you&apos;re building. We&apos;ll show you how the strategy,
          the design, and the build come together to move the number that
          matters most to you.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href="mailto:hello@pciapps.com" variant="primary" size="lg">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
