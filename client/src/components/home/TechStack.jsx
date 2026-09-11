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

  const logomark = (
    <svg
      id="logomark"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-auto w-[70vw] max-w-[720px] sm:w-[55vw] lg:w-[42vw]"
    >
      <path
        fill="#00DF98"
        d="M0 33C0 36.8653 3.13384 39.9987 6.99958 39.9987L14 39.9999C13.2133 39.9999 12.4947 39.5522 12.1486 38.8458L11.0002 36.5006C9.95114 34.359 7.77413 33.0014 5.38922 33.0012L0 33ZM6.27879e-08 22.0075C6.27879e-08 25.8693 3.13386 29 6.99963 29L19 28.9925C18.2133 28.9925 17.4947 28.5453 17.1485 27.8395L16.0002 25.4963C14.9511 23.3566 12.7741 22.0002 10.3892 22L6.27879e-08 22.0075ZM17.417 0C19.8022 0 21.9791 1.35633 23.0283 3.49577L24.1777 5.83863C24.5198 6.53564 25.2245 6.97988 26 6.99056L7 7C3.13401 7 6.27879e-08 3.86978 6.27879e-08 0.00846622L17.417 0ZM13.417 11C15.8022 11 17.9791 12.3563 19.0283 14.4956L20.1777 16.8384C20.5198 17.5353 21.2245 17.9796 22 17.9902L7 18C3.13401 18 6.27879e-08 14.8699 6.27879e-08 11.0088L13.417 11Z"
      />
      <path
        fill="#06835B"
        d="M40 0C40 3.86525 36.8662 6.99866 33.0004 6.99866L26 6.9999C26.7867 6.9999 27.5053 6.55222 27.8514 5.84583L28.9998 3.50057C30.0489 1.35903 32.2259 0.00140065 34.6108 0.0012436L40 0ZM40 11.0076C40 14.8694 36.8661 18 33.0004 18L22 17.9925C22.7868 17.9925 23.5053 17.5453 23.8515 16.8395L24.9998 14.4963C26.0489 12.3567 28.2259 11.0003 30.6108 11.0001L40 11.0076ZM22.583 33C20.1978 33 18.0209 34.3563 16.9717 36.4958L15.8223 38.8386C15.4803 39.5356 14.7755 39.9799 14 39.9906L33 40C36.866 40 40 36.8698 40 33.0085L22.583 33ZM27.583 22C25.1978 22 23.0209 23.3563 21.9717 25.4956L20.8223 27.8384C20.4802 28.5353 19.7755 28.9796 19 28.9902L33 29C36.866 29 40 25.8699 40 22.0088L27.583 22Z"
      />
    </svg>
  );

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
    <section className="relative overflow-hidden border-y border-white/10 bg-black md:border-grey-200 md:bg-white">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12] sm:opacity-[0.14]"
        aria-hidden
      >
        {logomark}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">
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