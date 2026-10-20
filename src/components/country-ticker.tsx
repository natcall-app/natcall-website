const tickerCountries: Array<{ name: string; code: string }> = [
  { name: "Eritrea", code: "er" },
  { name: "Ethiopia", code: "et" },
  { name: "Norway", code: "no" },
  { name: "Somalia", code: "so" },
  { name: "Sudan", code: "sd" },
  { name: "South Sudan", code: "ss" },
  { name: "Kenya", code: "ke" },
  { name: "Uganda", code: "ug" },
  { name: "Egypt", code: "eg" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "UAE", code: "ae" },
  { name: "Qatar", code: "qa" },
  { name: "Yemen", code: "ye" },
  { name: "Israel", code: "il" },
  { name: "Turkey", code: "tr" },
  { name: "United States", code: "us" },
  { name: "Canada", code: "ca" },
  { name: "United Kingdom", code: "gb" },
  { name: "Germany", code: "de" },
  { name: "France", code: "fr" },
  { name: "Sweden", code: "se" },
  { name: "Netherlands", code: "nl" },
  { name: "Italy", code: "it" },
  { name: "Australia", code: "au" },
];

function TickerItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? true : undefined}
    >
      {tickerCountries.map((country) => (
        <li
          key={country.code}
          className="flex items-center gap-2.5 border-r border-[#232323] px-6 py-2.5 text-[13px] font-medium text-[#d8d8d8] sm:px-8"
        >
          <img
            src={`https://flagcdn.com/w40/${country.code}.png`}
            alt=""
            width={20}
            height={14}
            loading="lazy"
            className="h-[14px] w-5 rounded-[2px] object-cover"
          />
          <span className="whitespace-nowrap">{country.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function CountryTicker() {
  return (
    <section
      aria-label="Countries you can call with Natcall"
      className="country-ticker overflow-hidden border-y border-[#232323] bg-[#0b0b0b]"
    >
      <div className="country-ticker-track flex w-max">
        <TickerItems />
        <TickerItems hidden />
      </div>
    </section>
  );
}
