"use client";

import Link from "next/link";
import { ACCENTS } from "./navItems";

export default function DesktopMenu({ activeItem, onClose }) {
  return (
    <div className="relative hidden lg:block">
      <div
        className={`absolute inset-x-0 top-0 z-50 overflow-hidden bg-white shadow-[0_24px_60px_-20px_rgba(10,22,40,0.15)] transition-all duration-500 ease-out ${
          activeItem
            ? "pointer-events-auto max-h-[520px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 translate-y-4 opacity-0"
        }`}
      >
        <div
          className="h-1.5 w-full origin-left transition-transform duration-700 ease-out"
          style={{
            background:
              "linear-gradient(90deg, #DA3750 0%, #D4A853 50%, #0A1628 100%)",
            transform: activeItem ? "scaleX(1)" : "scaleX(0)",
          }}
        />

        {activeItem && (
          <span
            className="pointer-events-none absolute -top-10 right-6 select-none font-heading text-[11rem] font-bold leading-none tracking-tight text-grey-100/60"
            aria-hidden
          >
            {activeItem.label}
          </span>
        )}

        <div className="relative mx-auto grid max-w-7xl grid-cols-[1fr_1.6fr] gap-14 px-6 py-12">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-grey-500">
                  {activeItem?.label}
                </p>
              </div>
              <h3 className="mt-5 font-heading text-3xl font-semibold leading-tight text-contrast">
                {activeItem?.description}
              </h3>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href={activeItem?.href || "#"}
                className="group inline-flex items-center gap-3 text-sm font-semibold text-contrast"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-all duration-300 group-hover:bg-accent">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
                <span className="border-b border-contrast/20 pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                  View all {activeItem?.label}
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            {activeItem &&
              activeItem.children.map((child, i) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={onClose}
                  className={`group flex items-center gap-5 border-b border-grey-100 py-4 transition-all duration-500 ${
                    activeItem ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${100 + i * 90}ms`,
                    background: `linear-gradient(90deg, ${ACCENTS[i % ACCENTS.length]}14, transparent 60%)`,
                  }}
                >
                  <span className="font-heading text-sm font-semibold text-grey-400 transition-colors group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-xl font-medium text-contrast transition-transform duration-300 group-hover:translate-x-1.5">
                    {child.label}
                  </span>
                  <span
                    className="h-1 w-6 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 -translate-x-2 text-grey-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
