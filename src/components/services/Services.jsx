import React, { useEffect } from "react";
import FluidLines from "../../assets/images/line-3dd.png";

const SERVICES = [
  {
    id: "accounting",
    title: "Accounting",
    desc: "Bookkeeping, financial reporting, and tax-ready statements.",
    bullets: ["Monthly reconciliations", "Clean chart of accounts", "Accurate financials"],
    icon: "ledger",
  },
  {
    id: "tax",
    title: "Tax Consultation",
    desc: "Expert guidance to stay compliant and minimize liabilities with proactive planning.",
    bullets: ["Strategy + planning", "Returns preparation", "Entity optimization"],
    icon: "shield",
  },
  {
    id: "payroll",
    title: "Payroll Services",
    desc: "Accurate payroll processing and compliant filings for your team.",
    bullets: ["W-2 / 1099 support", "Payroll setup", "Ongoing processing"],
    icon: "payroll",
  },
  {
    id: "advisory",
    title: "Financial Advisory",
    desc: "Forecasting, cashflow planning, and decision support that scales with you.",
    bullets: ["Cashflow planning", "Forecast models", "KPI reporting"],
    icon: "chart",
  },
  {
    id: "audit",
    title: "Audit Support",
    desc: "Confident support for internal controls, documentation, and compliance.",
    bullets: ["Document readiness", "Compliance support", "Issue resolution"],
    icon: "check",
  },
];

/** --- Minimal “3D icon blobs” (pure SVG + CSS) --- */
const Float3D = ({ variant = "a" }) => {
  const common =
    "absolute rounded-full blur-[0.2px] opacity-80 mix-blend-screen pointer-events-none";

  const Blob = ({ className }) => (
    <div
      className={`${common} ${className}`}
      style={{
        background:
          "radial-gradient(55% 55% at 30% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.10) 35%, rgba(16,185,129,0.28) 60%, rgba(16,185,129,0.06) 100%)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    />
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Scale blobs down on small screens so they don't overwhelm text */}
      {variant === "a" && (
        <>
          <Blob className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 -top-6 -left-6 md:-top-8 md:-left-8 animate-float-slow" />
          <Blob className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 top-6 md:top-8 -right-4 md:-right-6 animate-float-mid" />
          <Blob className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 -bottom-8 md:-bottom-10 left-10 md:left-14 animate-float-fast" />
        </>
      )}

      {variant === "b" && (
        <>
          <Blob className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 -top-8 md:-top-10 right-6 md:right-8 animate-float-mid" />
          <Blob className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 top-8 md:top-10 -left-8 md:-left-10 animate-float-slow" />
          <Blob className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 -bottom-6 md:-bottom-8 -right-6 md:-right-8 animate-float-fast" />
        </>
      )}

      <div
        className="absolute -bottom-12 md:-bottom-16 left-1/2 h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56 -translate-x-1/2 rounded-full opacity-30"
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "inset 0 0 0 1px rgba(16,185,129,0.18)",
        }}
      />
    </div>
  );
};

const ServiceGlyph = ({ type }) => {
  const base = "h-5 w-5";
  switch (type) {
    case "ledger":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9 8h6M9 12h6M9 16h4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9.5 12.2 11 13.7 14.8 9.9"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "payroll":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <path d="M7 7h10v14H7V7Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M9 11h6M9 15h6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <path d="M4 19V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path
            d="M8 15v-3M12 15V8M16 15v-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "check":
    default:
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none">
          <path
            d="M7 12.5 10.2 15.7 17.2 8.7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
  }
};

export default function Services() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SERVICES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="w-full py-14 sm:py-16 md:py-20 text-[color:var(--color-text)] bg-[color:var(--color-bg)]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Decorative bg: hide on very small screens to reduce clutter */}
        <img
          className="hidden sm:block w-full opacity-30 absolute -top-20 -left-20"
          src={FluidLines}
          alt=""
        />

        <div className="text-center mb-8 sm:mb-10 md:mb-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[color:var(--color-heading)]">
            Our Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[color:var(--color-text-muted)]">
            More than compliance—clarity, strategy, and clean books.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden z-10 relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="min-w-full flex-shrink-0 px-0 sm:px-4">
                <div className="group">
                  <div
                    className="
                      relative overflow-hidden
                      rounded-[var(--radius-base)]
                      border border-[color:var(--color-border)]
                      bg-[color:var(--color-card)]
                      shadow-[var(--shadow-card)]
                      transition-all duration-500 ease-out
                      group-hover:shadow-2xl group-hover:border-white/20
                      group-hover:scale-[1.01] sm:group-hover:scale-[1.02] md:group-hover:scale-[1.03]
                      p-6 sm:p-8 md:p-10
                    "
                  >
                    <Float3D variant={idx % 2 === 0 ? "a" : "b"} />

                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 opacity-70"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent)",
                      }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3">
                        <span
                          className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl"
                          style={{
                            background: "rgba(16,185,129,0.10)",
                            border: "1px solid rgba(16,185,129,0.25)",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                            color: "rgba(16,185,129,1)",
                          }}
                        >
                          <ServiceGlyph type={service.icon} />
                        </span>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[color:var(--color-heading)]">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] md:text-base leading-6 sm:leading-7 text-[color:var(--color-text-muted)] max-w-2xl">
                        {service.desc}
                      </p>

                      <ul className="mt-5 sm:mt-6 space-y-2 text-sm">
                        {service.bullets?.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span
                              className="mt-[7px] h-1.5 w-1.5 rounded-full"
                              style={{ background: "rgba(16,185,129,0.9)" }}
                            />
                            <span className="text-[color:var(--color-text-muted)]">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Buttons: full width on mobile, inline on sm+ */}
                      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                        <a
                          href="#contact"
                          className="
                            inline-flex w-full sm:w-fit items-center justify-center
                            rounded-[var(--radius-base)]
                            bg-[color:var(--color-accent)]
                            px-6 py-3
                            text-sm font-semibold text-white
                            transition hover:bg-[color:var(--color-accent-hover)]
                          "
                        >
                          Learn More
                        </a>
                        <a
                          href="#pricing"
                          className="
                            inline-flex w-full sm:w-fit items-center justify-center
                            rounded-[var(--radius-base)]
                            border border-[color:var(--color-border)]
                            px-6 py-3
                            text-sm font-semibold text-[color:var(--color-text)]
                            transition hover:bg-[color:var(--color-bg-alt)]
                          "
                        >
                          View Pricing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatSlow {
          0% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(18px,14px,0) rotate(10deg); }
          100% { transform: translate3d(0,0,0) rotate(0deg); }
        }
        @keyframes floatMid {
          0% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(-14px,18px,0) rotate(-10deg); }
          100% { transform: translate3d(0,0,0) rotate(0deg); }
        }
        @keyframes floatFast {
          0% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(10px,-16px,0) rotate(14deg); }
          100% { transform: translate3d(0,0,0) rotate(0deg); }
        }
        .animate-float-slow { animation: floatSlow 9s ease-in-out infinite; }
        .animate-float-mid { animation: floatMid 7s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 5.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
