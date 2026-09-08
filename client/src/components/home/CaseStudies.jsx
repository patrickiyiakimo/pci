"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/shared/Button";

const caseStudies = [
  {
    client: "KCRW",
    title: "Reimagining a Legacy Radio Station's Mobile App for the Next Generation",
    href: "/work/kcrw",
    domain: "Media & Broadcasting",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=70",
  },
  {
    client: "k-ID",
    title: "The World's First Cross-Platform Solution for Safely Onboarding Children",
    href: "/work/kid",
    domain: "Safety & Compliance",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=70",
  },
  {
    client: "Valara",
    title: "An All-in-One Rental Management SaaS Platform for Fleet Businesses",
    href: "/work/valara",
    domain: "SaaS & Fleet",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=70",
  },
  {
    client: "Root Insurance",
    title: "Making Insurance Engagement Fun Through Gamification",
    href: "/work/root",
    domain: "InsurTech",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=70",
  },
  {
    client: "Castability",
    title: "Revolutionizing the Actor Training Experience Through an Intuitive Mobile App",
    href: "/work/castability",
    domain: "Entertainment & Training",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=70",
  },
  {
    client: "Katzkin Automotive Leather",
    title: "Reinventing an Automotive Interior Retailer's eCommerce Experience",
    href: "/work/katzkin",
    domain: "Automotive & eCommerce",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=70",
  },
  {
    client: "Fitness Pact",
    title: "Driving Fitness Accountability Through Digital Commitment",
    href: "/work/fitness-pact",
    domain: "Health & Wellness",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=70",
  },
  {
    client: "Intterra Group",
    title: "Powering Emergency Response in a Real-Time Mobile Portal",
    href: "/work/intterra",
    domain: "Public Safety",
    image:
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1200&q=70",
  },
];

const MOBILE_SLIDE_W = 92;
const DESKTOP_SLIDE_W = 70;
const DESKTOP_QUERY = "(min-width: 768px)";

export default function CaseStudies() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(DESKTOP_QUERY).matches
      : false
  );
  const timerRef = useRef(null);

  const slideCount = caseStudies.length;
  const slideWidth = isDesktop ? DESKTOP_SLIDE_W : MOBILE_SLIDE_W;

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const handleChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideCount);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [paused, slideCount]);

  const next = () => setIndex((prev) => (prev + 1) % slideCount);
  const prev = () => setIndex((prev) => (prev - 1 + slideCount) % slideCount);

  return (
    <section id="work" className="bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="min-w-0 lg:col-span-4">
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
                aria-label="Previous case study"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-200 text-contrast transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next case study"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-200 text-contrast transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="min-w-0 lg:col-span-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * slideWidth}%)` }}
              >
                {caseStudies.map((cs, i) => (
                  <div
                    key={cs.client}
                    className="w-[92%] shrink-0 pr-6 md:w-[70%]"
                  >
                    <a
                      href={cs.href}
                      className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition-colors ${
                        i === index
                          ? "border-grey-200 bg-base-v2 hover:border-accent/40"
                          : "border-grey-200/60 bg-base-v2/70 hover:border-accent/30"
                      }`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-grey-100">
                        <Image
                          src={cs.image}
                          alt={`${cs.client} case study`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6 lg:p-7">
                        <p className="text-sm font-medium uppercase tracking-wider text-accent">
                          {cs.domain}
                        </p>
                        <h3 className="mt-3 flex-1 font-heading text-xl font-semibold leading-snug text-contrast lg:text-2xl">
                          {cs.title}
                        </h3>
                        <span className="mt-4 inline-block text-base font-medium text-grey-600 transition-colors group-hover:text-accent">
                          Learn More &rarr;
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
