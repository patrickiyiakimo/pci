"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "500+", label: "Products launched" },
  { value: "25M+", label: "Users have used our platforms" },
  { value: "12+", label: "Years in business" },
  { value: "$1B+", label: "Raised by our clients" },
];

function parseStat(value) {
  let prefix = "";
  let rest = value;

  if (rest.startsWith("$")) {
    prefix = "$";
    rest = rest.slice(1);
  }

  let suffix = "";
  if (rest.endsWith("+")) {
    suffix = "+";
    rest = rest.slice(0, -1);
  }

  let unit = "";
  if (/[KMB]$/.test(rest)) {
    unit = rest.slice(-1);
    rest = rest.slice(0, -1);
  }

  return { prefix, unit, suffix, count: parseFloat(rest) };
}

function Counter({ value }) {
  const { prefix, unit, suffix, count } = parseStat(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * count));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  return (
    <div ref={ref} className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
      {prefix}
      {display}
      {unit}
      {suffix}
    </div>
  );
}

export default function IntroStats() {
  return (
    <section className="border-y border-grey-200 bg-base-v2">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-contrast sm:text-xl">
            Your product problem is a business problem wearing a product
            costume. We work the{" "}
            <span className="text-accent">strategy before the build</span>, so
            what ships actually moves the number you&apos;re being measured on.
          </p>
          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4 lg:w-auto lg:min-w-[560px]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <Counter value={stat.value} />
                <div className="mt-2 text-sm text-grey-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
