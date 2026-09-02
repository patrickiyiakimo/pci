const techRows = [
  ["GitHub", "React", "Next.js", "Node.js", "PostgreSQL", "TypeScript"],
  ["Elasticsearch", "Redis", "Tailwind CSS", "AWS", "Kubernetes", "Docker"],
  ["Stripe", "Firebase", "GraphQL", "Vercel", "Figma", "Jira"],
];

export default function TechStack() {
  return (
    <section className="border-t border-navy-light bg-navy-light/20">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ice sm:text-4xl lg:text-5xl">
            Our Tech Stack
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            From front-end frameworks to cloud infrastructure, our stack is
            designed to reduce risk, increase confidence, and create products
            that last. These are the tools we use to move fast, stay reliable,
            and help our clients launch with impact.
          </p>
        </div>

        <div className="mt-12">
          {techRows.map((row, i) => (
            <div
              key={i}
              className="flex flex-wrap items-center justify-center gap-3 border-t border-navy-light/40 py-5"
            >
              {row.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-navy-light px-4 py-1.5 text-sm font-medium text-ice/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}