const packs = [
  { price: "$6.49", credit: "$5", featured: false },
  { price: "$12.99", credit: "$10", featured: true },
  { price: "$25.99", credit: "$20", featured: false },
  { price: "$64.99", credit: "$50", featured: false },
];

// Slim glass bar that sits along the bottom edge of the hero.
export function CreditPacks() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
      <div className="flex flex-col gap-4 rounded-2xl border border-[#2f2f2f] bg-black/45 p-4 backdrop-blur-md sm:p-5 lg:flex-row lg:items-center lg:gap-6">
        <div className="shrink-0 text-center lg:w-[190px] lg:text-left">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f6c617]">
            Choose your credits
          </p>
          <p className="mt-1 text-[12px] text-[#9a9a9a]">
            App Store prices. No subscription.
          </p>
        </div>

        <ul className="grid flex-1 grid-cols-2 gap-2.5 sm:grid-cols-4">
          {packs.map((pack) => (
            <li
              key={pack.price}
              className={`rounded-xl border px-4 py-3 ${
                pack.featured
                  ? "border-[#f6c617]/70 bg-[#f6c617]/[0.1]"
                  : "border-[#2a2a2a] bg-[#151515]/70"
              }`}
            >
              <p
                className={`text-[20px] font-extrabold leading-none tracking-tight sm:text-[22px] ${
                  pack.featured ? "text-[#f6c617]" : "text-white"
                }`}
              >
                {pack.price}
              </p>
              <p className="mt-1.5 text-[12px] leading-4 text-[#bcbcbc]">
                Adds {pack.credit} credit
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
