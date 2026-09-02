import Link from "next/link";
import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "AI Product Development", href: "/services/ai-development" },
      { label: "Product Strategy Consulting", href: "/services/product-strategy" },
      { label: "UI/UX Design", href: "/services/design" },
      { label: "App & Software Development", href: "/services/software-development" },
    ],
  },
  {
    title: "Clients",
    links: [
      { label: "Case Studies", href: "/work" },
      { label: "Industries", href: "/clients/industries" },
      { label: "Use Cases", href: "/clients/use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/company/about" },
      { label: "Blog", href: "/company/blog" },
      { label: "Careers", href: "/company/careers" },
      { label: "Guides", href: "/company/guides" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/company/faq" },
      { label: "Locations", href: "/company/locations" },
      { label: "Press", href: "/company/press" },
      { label: "Templates", href: "/company/templates" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", short: "in" },
  { label: "X", href: "https://x.com", short: "X" },
  { label: "Instagram", href: "https://www.instagram.com", short: "IG" },
];

export default function Footer() {
  return (
    <footer id="company" className="border-t border-navy-light bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate">
              A Strategy-Led Digital Product Agency. We think beyond the build — starting with strategy so what ships actually moves the numbers.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-light text-xs font-semibold text-slate transition-colors hover:border-gold hover:text-gold"
                  aria-label={s.label}
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ice">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-navy-light/50 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-3">
            <p className="text-xs text-slate">
              &#169; 2026 PCI Apps LLC |{" "}
              <Link href="/privacy-and-terms" className="hover:text-gold">
                Privacy &amp; Terms
              </Link>
            </p>
            <Button href="mailto:hello@pciapps.com" variant="outline" size="sm" className="self-start">
              Book a Call
            </Button>
          </div>
          <div className="flex flex-col gap-2 text-xs text-slate sm:flex-row sm:items-center sm:gap-6">
            <a href="mailto:hello@pciapps.com" className="hover:text-gold">
              hello@pciapps.com
            </a>
            <a href="tel:+12138161285" className="hover:text-gold">
              +1 (213) 816-1285
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
