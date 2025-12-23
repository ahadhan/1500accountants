import React from "react";

/* Replace with real images */
import Team1 from "../../assets/images/founder-bg.png";
import Team2 from "../../assets/images/hr.jpg";
import Team3 from "../../assets/images/ceo.jpg";

const DOMAINS = [
  {
    title: "Tax Consulting",
    desc: "Strategic tax planning and compliance for individuals and businesses across multiple jurisdictions.",
  },
  {
    title: "Bookkeeping & Accounting",
    desc: "Clean, structured financial records with accurate reporting and monthly reconciliations.",
  },
  {
    title: "Payroll Management",
    desc: "End-to-end payroll processing with compliance, filings, and employee reporting.",
  },
  {
    title: "Financial Advisory",
    desc: "Cash flow planning, forecasting, and strategic insights to support business growth.",
  },
];

const TEAM = [
  {
    name: "Irfan ",
    role: "Founder & Managing Partner",
    image: Team1,
  },
  {
    name: "Emily Johnson",
    role: "Senior Tax Consultant",
    image: Team2,
  },
  {
    name: "Michael Lee",
    role: "Head of Accounting",
    image: Team3,
  },
];

export default function About() {
  return (
    <section
    id="about"
      className="w-full py-20 bg-[color:var(--color-bg)] text-[color:var(--color-text)]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="mx-auto max-w-6xl px-4 space-y-24">

        {/* ================= COMPANY PROFILE ================= */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--color-heading)]">
            Company Profile
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-[color:var(--color-text-muted)]">
            1-500 Accountants is a professional tax consulting and bookkeeping firm
            dedicated to helping businesses stay compliant, organized, and financially
            confident. We work closely with startups, growing companies, and established
            enterprises to simplify complex financial challenges.
          </p>
          <p className="mt-4 text-[15px] leading-7 text-[color:var(--color-text-muted)]">
            Our approach is structured, transparent, and proactive. We don’t just
            manage numbers — we help clients make informed decisions backed by
            accurate financial data and strategic insight.
          </p>
        </div>

        {/* ================= WORKING DOMAIN ================= */}
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--color-heading)]">
              Our Working Domain
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
              Specialized services designed to support businesses at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOMAINS.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[var(--radius-base)]
                  border border-[color:var(--color-border)]
                  bg-[color:var(--color-card)]
                  p-6
                  shadow-[var(--shadow-card)]
                "
              >
                <h3 className="text-lg font-semibold text-[color:var(--color-heading)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TEAM ================= */}
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--color-heading)]">
              Our Team
            </h2>
            <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
              Experienced professionals committed to your financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="
                  group
                  rounded-[var(--radius-base)]
                  border border-[color:var(--color-border)]
                  bg-[color:var(--color-card)]
                  overflow-hidden
                  shadow-[var(--shadow-card)]
                  transition
                  hover:shadow-2xl
                "
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* subtle overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(17,24,39,0.75), rgba(17,24,39,0.2), transparent)",
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[color:var(--color-heading)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
