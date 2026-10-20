import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

const icon = (d: ReactNode) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    {d}
  </svg>
);

const features: Array<{ title: string; text: string; icon: ReactNode }> = [
  {
    title: "Crystal-clear calls",
    text: "HD voice quality over Wi-Fi or mobile data, built for long calls home.",
    icon: icon(
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
    ),
  },
  {
    title: "240+ countries",
    text: "Call mobiles and landlines worldwide, including Eritrea, Ethiopia and Norway.",
    icon: icon(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>,
    ),
  },
  {
    title: "Pay as you go",
    text: "Top up credit and pay per minute. No contracts, no subscriptions.",
    icon: icon(
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h3" />
      </>,
    ),
  },
  {
    title: "Clear rates",
    text: "See the per-minute rate for your destination before you call.",
    icon: icon(
      <>
        <path d="M12 3v18M16 7.5c0-1.4-1.8-2.5-4-2.5s-4 1.1-4 2.5 1.8 2.5 4 2.5 4 1.1 4 2.5-1.8 2.5-4 2.5-4-1.1-4-2.5" />
      </>,
    ),
  },
  {
    title: "Easy sign-in",
    text: "Continue with Apple, Google, email or phone number in seconds.",
    icon: icon(
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20a8 8 0 0 1 16 0" />
      </>,
    ),
  },
  {
    title: "History & contacts",
    text: "Your recent calls, saved contacts and balance, all in one app.",
    icon: icon(
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>,
    ),
  },
];

const phoneClass = "relative block w-[190px] sm:w-[220px] lg:w-[236px]";

// Fade the screenshot edges into the page so no hard rectangle shows.
const phoneMask = {
  WebkitMaskImage:
    "linear-gradient(to bottom,#000 80%,transparent),linear-gradient(to right,transparent,#000 9%,#000 91%,transparent)",
  maskImage:
    "linear-gradient(to bottom,#000 80%,transparent),linear-gradient(to right,transparent,#000 9%,#000 91%,transparent)",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
} as const;

export function AppShowcase() {
  return (
    <section
      aria-labelledby="app-showcase-title"
      className="relative overflow-hidden border-b border-[#2a2a2a] bg-[#0d0d0d] py-16 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[560px] w-[760px] -translate-y-1/2 rounded-full bg-[#f6c617]/[0.06] blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f6c617]">
              The Natcall app
            </p>
            <h2
              id="app-showcase-title"
              className="mt-3 max-w-md font-[family-name:var(--font-display)] text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
            >
              Everything you need to call home.
            </h2>
          </Reveal>

          <ul className="mt-9 grid gap-3.5 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={0.04 * index}>
                <li className="h-full rounded-2xl border border-[#2a2a2a] bg-[#151515] p-5 transition-colors hover:border-[#f6c617]/40">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f6c617]/10 text-[#f6c617]">
                    {feature.icon}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-[#a8a8a8]">
                    {feature.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal direction="right" delay={0.15}>
          <div className="flex items-start justify-center gap-4 sm:gap-6 lg:justify-end">
            <Image
              src="/images/mockups/app-screen-welcome.webp"
              alt="Natcall app welcome screen"
              width={592}
              height={1148}
              sizes="(min-width: 1024px) 236px, (min-width: 640px) 220px, 190px"
              className={`${phoneClass} mt-12 sm:mt-16`}
              style={phoneMask}
            />
            <Image
              src="/images/mockups/app-screen-login.webp"
              alt="Natcall app sign-in screen"
              width={592}
              height={1148}
              sizes="(min-width: 1024px) 236px, (min-width: 640px) 220px, 190px"
              className={phoneClass}
              style={phoneMask}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
