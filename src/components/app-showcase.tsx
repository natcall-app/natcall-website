import Image from "next/image";
import { Reveal } from "@/components/reveal";

const points = [
  "Crystal-clear HD calls to 240+ countries",
  "Sign in with Apple, Google, email or phone",
  "Simple per-minute rates, no contracts",
];

export function AppShowcase() {
  return (
    <section
      aria-labelledby="app-showcase-title"
      className="relative overflow-hidden border-b border-[#2a2a2a] bg-[#0d0d0d] py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6c617]/[0.07] blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6c617]">
              The Natcall app
            </p>
            <h2
              id="app-showcase-title"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Everything you need to call home
            </h2>
            <p className="mt-4 text-base leading-7 text-[#bcbcbc] sm:text-lg">
              Create your account in seconds and start making international
              calls from your iPhone or Android.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:mt-16 sm:flex-row sm:items-start sm:gap-8 lg:gap-12">
          <Reveal delay={0.05}>
            <figure className="w-[260px] overflow-hidden rounded-[28px] border border-[#2a2a2a] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:w-[280px] lg:w-[320px] sm:translate-y-8">
              <Image
                src="/images/mockups/app-welcome.webp"
                alt="Natcall welcome screen: Call the world. Stay connected."
                width={736}
                height={1600}
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 260px"
                className="h-auto w-full"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.15}>
            <figure className="w-[260px] overflow-hidden rounded-[28px] border border-[#2a2a2a] bg-black shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:w-[280px] lg:w-[320px]">
              <Image
                src="/images/mockups/app-login.webp"
                alt="Natcall login screen: Call anywhere. Connect instantly."
                width={736}
                height={1600}
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 260px"
                className="h-auto w-full"
              />
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <ul className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 sm:mt-20">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-[#d8d8d8]"
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#f6c617]"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
