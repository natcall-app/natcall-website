const packs = [
  { price: "$6.49", credit: "$5", featured: false },
  { price: "$12.99", credit: "$10", featured: true },
  { price: "$25.99", credit: "$20", featured: false },
  { price: "$64.99", credit: "$50", featured: false },
];

export function CreditPacks() {
  return (
    <div className="w-full max-w-[560px]">
      <div className="flex items-center justify-center gap-3 lg:justify-start">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#f6c617]">
          Choose your credits
        </p>
        <span aria-hidden="true" className="h-px flex-1 bg-[#2a2a2a] lg:max-w-[180px]" />
      </div>

      <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {packs.map((pack) => (
          <li
            key={pack.price}
            className={`rounded-xl border px-3.5 py-3 text-left backdrop-blur-sm ${
              pack.featured
                ? "border-[#f6c617]/70 bg-[#f6c617]/[0.08]"
                : "border-[#2a2a2a] bg-[#151515]/80"
            }`}
          >
            <p
              className={`text-[22px] font-extrabold leading-none tracking-tight ${
                pack.featured ? "text-[#f6c617]" : "text-white"
              }`}
            >
              {pack.price}
            </p>
            <p className="mt-2 text-[12px] leading-4 text-[#bcbcbc]">
              Adds {pack.credit} credit
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-2.5 text-center text-[11px] text-[#8a8a8a] lg:text-left">
        App Store prices. Credit is used per minute, with no subscription.
      </p>
    </div>
  );
}
