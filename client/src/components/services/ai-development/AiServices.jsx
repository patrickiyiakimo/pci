import Image from "next/image";

const services = [
  {
    title: "AI Assistants & Chatbots",
    description:
      "We design and build AI assistants and conversational chatbot interfaces that automate workflows, support users, and integrate directly into your product and operations. These are not standalone chatbots. They are systems that complete tasks, access real data, and drive measurable outcomes.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    alt: "Conversational AI interface",
    href: "/services/ai-development",
  },
  {
    title: "AI Data Layer & Infrastructure",
    description:
      "We design and build the data infrastructure that powers reliable AI systems. From retrieval pipelines to model orchestration, we ensure your AI is grounded in accurate, structured, and usable data.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    alt: "Server infrastructure and data pipelines",
    href: "/services/ai-development",
  },
  {
    title: "AI Design & UX",
    description:
      "We design AI experiences that are clear, usable, and built for real interaction. From conversational interfaces to human-in-the-loop systems, we make AI understandable, trustworthy, and effective in practice.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    alt: "UI/UX design workspace",
    href: "/services/ai-development",
  },
  {
    title: "AI Optimization & Continuous Improvement",
    description:
      "We continuously monitor, refine, and improve AI systems to increase accuracy, reduce cost, and expand capability over time. From prompt optimization to system performance, we help your AI evolve as your product and data grow.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    alt: "Performance analytics dashboard",
    href: "/services/ai-development",
  },
  {
    title: "AI Prototyping & Rapid Validation",
    description:
      "We design and build functional AI prototypes that allow you to test concepts, validate feasibility, and align stakeholders before committing to full development. In a matter of weeks, you can see how AI will actually work in your product or operations.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    alt: "Rapid prototyping and testing",
    href: "/services/ai-development",
  },
  {
    title: "AI Strategy & Opportunity Mapping",
    description:
      "In just a few weeks, we turn AI ambiguity into a clear, prioritized roadmap. Working with product, engineering, and executive teams, we identify where AI drives real business value, validate feasibility, and define exactly what should be built before development begins.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    alt: "Strategic planning whiteboard",
    href: "/services/ai-development",
  },
  {
    title: "AI Workflow Automation",
    description:
      "We design and build AI-powered workflows that automate repetitive tasks, streamline operations, and improve efficiency across your organization. By integrating AI into your systems, we help teams move faster without increasing headcount.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    alt: "Automated workflow systems",
    href: "/services/ai-development",
  },
  {
    title: "AI-Enhanced Product Development",
    description:
      "We design and build AI-powered products, copilots, and intelligent features that improve user experience, automate workflows, and unlock new capabilities. From concept to launch, we help teams turn AI into real product value.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    alt: "Development team building AI products",
    href: "/services/ai-development",
  },
];

export default function AiServices() {
  return (
    <section className="bg-base-v2">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-contrast sm:text-4xl lg:text-5xl">
            Our AI Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-grey-600 sm:text-lg">
            End-to-end AI capabilities — from strategy through build and
            optimization.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-grey-200 bg-white transition-colors hover:border-accent/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-grey-100">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold tracking-tight text-contrast">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-grey-600">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-grey-600 transition-colors group-hover:text-accent">
                  Learn more
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
