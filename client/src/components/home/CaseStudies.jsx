import Button from "@/components/shared/Button";

const caseStudies = [
  {
    client: "KCRW",
    title: "Reimagining a Legacy Radio Station's Mobile App for the Next Generation",
    href: "/work/kcrw",
    domain: "Media & Broadcasting",
  },
  {
    client: "k-ID",
    title: "The World's First Cross-Platform Solution for Safely Onboarding Children",
    href: "/work/kid",
    domain: "Safety & Compliance",
  },
  {
    client: "Valara",
    title: "An All-in-One Rental Management SaaS Platform for Fleet Businesses",
    href: "/work/valara",
    domain: "SaaS & Fleet",
  },
  {
    client: "Root Insurance",
    title: "Making Insurance Engagement Fun Through Gamification",
    href: "/work/root",
    domain: "InsurTech",
  },
  {
    client: "Castability",
    title: "Revolutionizing the Actor Training Experience Through an Intuitive Mobile App",
    href: "/work/castability",
    domain: "Entertainment & Training",
  },
  {
    client: "Katzkin Automotive Leather",
    title: "Reinventing an Automotive Interior Retailer's eCommerce Experience",
    href: "/work/katzkin",
    domain: "Automotive & eCommerce",
  },
  {
    client: "Fitness Pact",
    title: "Driving Fitness Accountability Through Digital Commitment",
    href: "/work/fitness-pact",
    domain: "Health & Wellness",
  },
  {
    client: "Intterra Group",
    title: "Powering Emergency Response in a Real-Time Mobile Portal",
    href: "/work/intterra",
    domain: "Public Safety",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-ice sm:text-4xl lg:text-5xl">
              Case Studies
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              We don't just talk about outcomes, we build them. These case
              studies show how we've partnered with teams to solve complex
              problems, align strategy, and ship real products.
            </p>
          </div>
          <Button href="/work" variant="outline" size="md">
            View All Work
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {caseStudies.map((cs) => (
            <a
              key={cs.client}
              href={cs.href}
              className="group overflow-hidden rounded-2xl border border-navy-light bg-navy-light/30 transition-colors hover:border-gold/40"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-navy-light to-navy p-6">
                <span className="text-2xl font-bold tracking-tight text-ice/40 transition-colors group-hover:text-gold">
                  {cs.client}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-gold">
                  {cs.domain}
                </p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-ice">
                  {cs.title}
                </h3>
                <span className="mt-3 inline-block text-sm font-medium text-slate transition-colors group-hover:text-gold">
                  Learn More &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
