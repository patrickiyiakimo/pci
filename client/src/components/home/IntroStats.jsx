const stats = [
  { value: "500+", label: "Products launched" },
  { value: "25M+", label: "Users have used our platforms" },
  { value: "12+", label: "Years in business" },
  { value: "$1B+", label: "Raised by our clients" },
];

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
                <div className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-grey-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
