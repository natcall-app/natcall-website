import { Reveal } from "@/components/reveal";

const packs = [
  { name: "Starter", price: "$6.49", credit: "$5", featured: false },
  { name: "Most popular", price: "$12.99", credit: "$10", featured: true },
  { name: "Family", price: "$25.99", credit: "$20", featured: false },
  { name: "Power", price: "$64.99", credit: "$50", featured: false },
];

const assurances = [
  "No subscription",
  "Pay only per minute",
  "Secure checkout through the App Store",
];

export function CreditPacks() {
  return (
    <section
      aria-labelledby="credit-packs-title"
      className="relative overflow-hidden border-b border-[#2a2a2a] bg-[#0d0d0d] py-14 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6c617]/[0.05] blur-[120px]"
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6c617]">
              Choose your credits
            </p>
            <h2
              id="credit-packs-title"
              className="mt-3 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Top up once. Call whenever you like.
            </h2>
            <p className="mt-3 text-base leading-7 text-[#a8a8a8]">
              Pick a credit pack and spend it on calls to any country, at the
              rate shown before you dial.
            </p>
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
          {packs.map((pack, index) => (
            <Reveal key={pack.price} delay={0.06 * index}>
              <li
                className={`relative flex h-full flex-col rounded-2xl border p-5 text-left transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${
                  pack.featured
                    ? "border-[#f6c617]/70 bg-gradient-to-b from-[#f6c617]/[0.12] to-[#151515] shadow-[0_20px_60px_rgba(246,198,23,0.12)] lg:-translate-y-2 lg:hover:-translate-y-3"
                    : "border-[#2a2a2a] bg-[#151515] hover:border-[#f6c617]/40"
                }`}
              >
                <p
                  className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                    pack.featured ? "text-[#f6c617]" : "text-[#8a8a8a]"
                  }`}
                >
                  {pack.name}
                </p>
                <p
                  className={`mt-4 text-[34px] font-extrabold leading-none tracking-tight sm:text-[40px] ${
                    pack.featured ? "text-[#f6c617]" : "text-white"
                  }`}
                >
                  {pack.price}
                </p>
                <div className="mt-5 border-t border-[#2a2a2a] pt-4">
                  <p className="text-sm font-semibold text-white">
                    Adds {pack.credit} credit
                  </p>
                  <p className="mt-1 text-xs text-[#8a8a8a]">App Store price</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <ul className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-2.5 sm:mt-11">
            {assurances.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-[#d0d0d0]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 text-[#f6c617]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m4.5 10.5 3.5 3.5 7.5-8" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
