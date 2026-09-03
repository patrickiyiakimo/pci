"use client";

import { useEffect, useRef, useState } from "react";
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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const itemsPerView = 3;
  const slideCount = Math.ceil(caseStudies.length / itemsPerView);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideCount);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [paused, slideCount]);

  const next = () => setIndex((prev) => (prev + 1) % slideCount);
  const prev = () => setIndex((prev) => (prev - 1 + slideCount) % slideCount);

  return (
    <section id="work" className="bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-contrast sm:text-4xl lg:text-5xl">
              Case Studies
            </h2>
            <p className="mt-4 text-base leading-relaxed text-grey-600 sm:text-lg">
              We don&apos;t just talk about outcomes, we build them. These case
              studies show how we&apos;ve partnered with teams to solve complex
              problems, align strategy, and ship real products. The result is work
              that scales, performs, and gets it right from day one.
            </p>

            <div className="mt-8">
              <Button href="/work" variant="outline" size="md">
                View All Work
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous case studies"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-200 text-contrast transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next case studies"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-200 text-contrast transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="lg:col-span-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {Array.from({ length: slideCount }, (_, i) => (
                  <div key={i} className="grid w-full shrink-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pr-6">
                    {caseStudies.slice(i * itemsPerView, i * itemsPerView + itemsPerView).map((cs) => (
                      <a
                        key={cs.client}
                        href={cs.href}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-grey-200 bg-base-v2 transition-colors hover:border-accent/40"
                      >
                        <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-grey-100 to-base-v2 p-6">
                          <span className="text-2xl font-bold tracking-tight text-grey-300 transition-colors group-hover:text-accent">
                            {cs.client}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <p className="text-xs font-medium uppercase tracking-wider text-accent">
                            {cs.domain}
                          </p>
                          <h3 className="mt-2 flex-1 text-base font-semibold leading-snug text-contrast">
                            {cs.title}
                          </h3>
                          <span className="mt-3 inline-block text-sm font-medium text-grey-600 transition-colors group-hover:text-accent">
                            Learn More &rarr;
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: slideCount }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === i ? "w-6 bg-accent" : "w-2 bg-grey-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
