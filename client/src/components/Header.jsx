"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/shared/Logo";
import Button from "@/components/shared/Button";
import DesktopMenu from "@/components/header/DesktopMenu";
import MobileMenu from "@/components/header/MobileMenu";
import { navItems } from "@/components/header/navItems";
import Link from "next/link";

const LG_BREAKPOINT = 1024;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= LG_BREAKPOINT && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  const activeItem = navItems.find((i) => i.label === active && i.children) || null;

  return (
    <header
      className="sticky top-0 z-50 border-b border-grey-200 bg-white"
      onMouseLeave={() => setActive(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <button
                  className="group flex items-center gap-1.5 py-2 text-sm font-medium text-grey-700 transition-colors hover:text-contrast"
                  onMouseEnter={() => setActive(item.children ? item.label : null)}
                >
                  <span>{item.label}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`h-3 w-3 transition-transform duration-300 ${
                      active === item.label ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="group flex items-center gap-1.5 py-2 text-sm font-medium text-grey-700 transition-colors hover:text-contrast"
                >
                  <span>{item.label}</span>
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button href="/book-a-call" variant="primary" size="md">
            Book a call
          </Button>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-contrast transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-contrast opacity-100 transition-all duration-300 ${
              mobileOpen ? "translate-x-2 opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-contrast transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <DesktopMenu activeItem={activeItem} onClose={() => setActive(null)} />

      <MobileMenu
        navItems={navItems}
        mobileOpen={mobileOpen}
        expanded={expanded}
        onToggle={(label) => setExpanded(expanded === label ? null : label)}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
