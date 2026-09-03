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
  return (
    <section className="border-y border-grey-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
         <h2 className="mt-4 text-3xl font-bold tracking-tight text-contrast sm:text-4xl lg:text-5xl">
            Our Tech Stack
          </h2>
          <p className="mt-4 text-base leading-relaxed text-grey-600 sm:text-lg">
            From front-end frameworks to cloud infrastructure, our stack is
            designed to reduce risk, increase confidence, and create products
            that last. These are the tools we use to move fast, stay reliable,
            and help our clients launch with impact.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-14">
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
