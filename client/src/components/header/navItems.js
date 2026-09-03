export const navItems = [
  {
    label: "Services",
    href: "/services",
    description:
      "From strategy to ship — end-to-end product services that move the numbers that matter.",
    children: [
      { label: "AI Development", href: "/services/ai-development" },
      { label: "App & Software Development", href: "/services/software-development" },
      { label: "Design", href: "/services/design" },
      { label: "Product Strategy", href: "/services/product-strategy" },
    ],
  },
  { label: "Work", href: "/work", description: "Case studies & shipped products." },
  {
    label: "Clients",
    href: "/clients",
    description: "The industries and use cases we serve.",
    children: [
      { label: "Industries", href: "/clients/industries" },
      { label: "Use Cases", href: "/clients/use-cases" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    description: "Who we are, what we write, and where we're headed.",
    children: [
      { label: "About Us", href: "/company/about" },
      { label: "Blog", href: "/company/blog" },
      { label: "Careers", href: "/company/careers" },
      { label: "Guides", href: "/company/guides" },
    ],
  },
];

export const ACCENTS = ["#DA3750", "#0A1628", "#D4A853"];
