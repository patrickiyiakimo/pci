import Button from "@/components/shared/Button";

const services = [
  {
    index: "01",
    title: "AI Development",
    href: "/services/ai-development",
    description:
      "We help organizations turn AI into real products, workflows, and systems that drive measurable outcomes grounded in strategy, aligned to business goals, and built to perform in real-world conditions.",
  },
  {
    index: "02",
    title: "App & Software Development",
    href: "/services/software-development",
    description:
      "We build complex, scalable software that holds up in regulated environments and under real enterprise load. 500+ products means the hard problems aren't surprises. They're already in the approach.",
  },
  {
    index: "03",
    title: "Product Design",
    href: "/services/design",
    description:
      "Good strategy only counts if it survives contact with your audience. We convert insights into experience fast, using AI-accelerated prototyping and evaluative research to pressure-test direction before it becomes expensive.",
  },
  {
    index: "04",
    title: "Product Strategy",
    href: "/services/product-strategy",
    description:
      "Get to the insight that matters without months of discovery. Through rapid collaborative strategy sprints, we find the human truth behind your challenge, shape a clear direction, and if you're ready to build, the same team takes it through delivery.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="text-3xl font-bold tracking-tight text-ice sm:text-4xl lg:text-5xl">
            What We Do
          </h2>
          <Button href="/services" variant="outline" size="md">
            Explore Our Services
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group overflow-hidden rounded-2xl border border-navy-light bg-navy-light/20 p-6 transition-colors hover:border-gold/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold tracking-tight text-ice sm:text-2xl">
                  {service.title}
                </h3>
                <span className="text-sm font-semibold text-gold">
                  {service.index}
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-slate">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate transition-colors group-hover:text-gold">
                Learn More
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12l13 12 17 5 13 8 9 15z" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}