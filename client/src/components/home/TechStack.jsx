import Image from "next/image";

const techItems = [
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Node.js", logo: "/logos/node.svg" },
  { name: "PHP", logo: "/logos/php.svg" },
  { name: "Laravel", logo: "/logos/laravel.svg" },
  { name: "Flutter", logo: "/logos/flutter.svg" },
  { name: "Dart", logo: "/logos/dart.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Redis", logo: "/logos/redis.svg" },
  { name: "Tailwind", logo: "/logos/tailwind.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Laravel Cloud", logo: "/logos/laravel-cloud.svg" },
  { name: "DigitalOcean", logo: "/logos/digital-ocean.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Google Meet", logo: "/logos/google-meet.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Firebase", logo: "/logos/firebase.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "GraphQL", logo: "/logos/graphql.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Jira", logo: "/logos/jira.svg" },
];

export default function TechStack() {
  const mid = Math.ceil(techItems.length / 2);
  const firstRow = techItems.slice(0, mid);
  const secondRow = techItems.slice(mid);

  const renderChip = (tech, i) => (
    <div
      key={`${tech.name}-${i}`}
      className="flex shrink-0 flex-col items-center justify-center gap-3 px-8"
    >
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-black/5">
        <Image
          src={tech.logo}
          alt={`${tech.name} logo`}
          width={48}
          height={48}
          className="h-10 w-10 object-contain"
        />
      </span>
      <span className="text-sm font-medium text-white/70">{tech.name}</span>
    </div>
  );

  return (
    <section className="border-y border-white/10 bg-black md:border-grey-200 md:bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-contrast lg:text-5xl">
            Our Tech Stack
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg md:text-grey-600">
            From front-end frameworks to cloud infrastructure, our stack is
            designed to reduce risk, increase confidence, and create products
            that last. These are the tools we use to move fast, stay reliable,
            and help our clients launch with impact.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-10 overflow-hidden md:hidden">
          <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
            {[...firstRow, ...firstRow].map((tech, i) => renderChip(tech, i))}
          </div>
          <div
            className="flex w-max animate-marquee-reverse items-center hover:[animation-play-state:paused]"
            style={{ animationDuration: "36s" }}
          >
            {[...secondRow, ...secondRow].map((tech, i) => renderChip(tech, i))}
          </div>
        </div>

        <div className="mt-14 hidden flex-wrap items-center justify-center gap-x-16 gap-y-14 md:flex">
          {techItems.map((tech) => (
            <div
              key={tech.name}
              className="flex w-28 flex-col items-center justify-center gap-3 text-center"
            >
              <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white p-4 shadow-sm ring-1 ring-grey-200">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  width={96}
                  height={96}
                  className="h-16 w-16 object-contain transition-transform duration-300 hover:scale-110"
                />
              </span>
              <span className="text-sm font-medium text-grey-600">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}