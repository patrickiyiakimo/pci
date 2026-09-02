import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";

const navItems = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Development", href: "/services/ai-development" },
      { label: "App & Software Development", href: "/services/software-development" },
      { label: "Design", href: "/services/design" },
      { label: "Product Strategy", href: "/services/product-strategy" },
    ],
  },
  { label: "Work", href: "/work" },
  {
    label: "Clients",
    href: "/clients",
    children: [
      { label: "Industries", href: "/clients/industries" },
      { label: "Use Cases", href: "/clients/use-cases" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    children: [
      { label: "About Us", href: "/company/about" },
      { label: "Blog", href: "/company/blog" },
      { label: "Careers", href: "/company/careers" },
      { label: "Guides", href: "/company/guides" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-grey-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="text-sm font-medium text-grey-700 transition-colors hover:text-contrast"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 pt-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="w-64 rounded-2xl border border-grey-200 bg-white p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-grey-600 transition-colors hover:bg-base-v2 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button href="mailto:hello@pciapps.com" variant="dark" size="md">
            Get Started
          </Button>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-contrast transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-contrast transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-contrast transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-grey-200 bg-white px-6 py-4 lg:hidden">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-grey-100 py-2">
              <Link
                href={item.href}
                className="block py-2 text-base font-medium text-contrast hover:text-accent"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-2 text-sm text-grey-600 hover:text-accent"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button
            href="mailto:hello@pciapps.com"
            variant="dark"
            size="lg"
            className="mt-4 w-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
}