const stats = [
  { value: "500+", label: "Products launched" },
  { value: "25M+", label: "Users have used our platforms" },
  { value: "12+", label: "Years in business" },
  { value: "$1B+", label: "Raised by our clients" },
];

export default function IntroStats() {
  return (
    <section className="border-y border-navy-light bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-ice sm:text-xl">
            Your product problem is a business problem wearing a product
            costume. We work the{" "}
            <span className="text-gold">strategy before the build</span>, so
            what ships actually moves the number you're being measured on.
          </p>
          <div className="grid w-full grid-cols-2 gap-8 sm:grid-cols-4 lg:w-auto lg:min-w-[560px]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold tracking-tight text-gold sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
