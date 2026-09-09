"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "PCI Apps was exactly what we needed. Their team brought clarity, creativity, and momentum to a project that's central to how we engage our audience. They've completely re-energized our digital experience.",
    author: "Nathalie Hill",
    role: "Chief Audience Officer, KCRW",
    href: "/work/kcrw",
  },
  {
    quote:
      "They designed and implemented a new on-demand platform that's far more accessible. Their team was professional, skilled, and responsive, giving us weekly breakdowns of completed work along the way.",
    author: "Debbie Cravey",
    role: "Development Manager, ECP",
    href: "/work/ecp",
  },
  {
    quote:
      "My experience with PCI Apps has been nothing but positive. The team is talented, passionate, and truly enjoyable to work with.",
    author: "Aaron Fleisher",
    role: "Founder, BYOU",
    href: "/work/byou",
  },
  {
    quote:
      "The PCI Apps team is excellent. They combine outstanding technical skills with a tireless work ethic, making them great partners all around.",
    author: "Kieran Donovan",
    role: "CEO, k-ID",
    href: "/work/kid",
  },
  {
    quote:
      "PCI Apps built a strong mobile app product that's scheduled for release next month. The team was highly communicative about timelines and even delivered several features ahead of schedule.",
    author: "Jack Lozyniak",
    role: "Founder, Gaido",
    href: "/work/gaido",
  },
  {
    quote:
      "PCI Apps was very professional. I never came to a meeting doubting whether or not they would be prepared for it.",
    author: "Alex Daley",
    role: "CEO, Hard Assets Alliance",
    href: "/work/hard-asset-alliance",
  },
  {
    quote:
      "I engaged PCI Apps to design and build our fitness motivation app from scratch. They delivered a functioning, bug-free app and stayed punctual, communicative, and on budget.",
    author: "Jack Merino",
    role: "Founder, Fitness Pact",
    href: "/work/fitness-pact",
  },
  {
    quote:
      "Since launch, I've seen engagement up 6%, page views up 25%, and total users up 5%. They were consistently on time, communicative, and easy to work with.",
    author: "Natasha Wilson",
    role: "Digital Marketing Manager, TGS",
    href: "/work/tgs",
  },
  {
    quote:
      "The PCI Apps team was competent, collaborative, and honest. When they didn't have an immediate answer, they worked quickly to find solutions and communicate them clearly.",
    author: "Ric Arthur",
    role: "CEO, Wayfarer",
    href: "/work/wayfarer",
  },
  {
    quote:
      "Working with David and his team was a great experience. They were sharp, efficient, and able to adapt quickly to meet our needs.",
    author: "Brian Lovera",
    role: "Co-founder & CTO, Kabata",
    href: "/work/kabata",
  },
];

function Card({ t }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-grey-200 bg-white p-6">
      <blockquote className="flex-1 text-base leading-relaxed text-contrast">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <div className="mt-5 border-t border-grey-200 pt-4">
        <p className="text-sm font-semibold text-contrast">{t.author}</p>
        <p className="text-xs text-grey-500">{t.role}</p>
      </div>
    </figure>
  );
}

export default function AiTestimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [paused, count]);

  const next = () => setIndex((prev) => (prev + 1) % count);
  const prev = () => setIndex((prev) => (prev - 1 + count) % count);

  return (
    <section className="border-t border-grey-200 bg-base">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-contrast sm:text-4xl lg:text-5xl">
            What Our Partners Are Saying:
          </h2>
        </div>

        <div className="mt-12 hidden md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.author} t={t} />
          ))}
        </div>

        <div
          className="mt-12 md:hidden"
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 92}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={`${t.author}-${i}`} className="w-[92%] shrink-0 pr-6">
                  <Card t={t} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-200 bg-white text-contrast transition-colors hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-200 bg-white text-contrast transition-colors hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
