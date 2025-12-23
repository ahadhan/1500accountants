import React from "react";

import ConsultationImg from "../../assets/images/consultation.jpg";
import StrategyImg from "../../assets/images/strategy.jpg";
import SupportImg from "../../assets/images/support.jpg";

const Process = () => {
  return (
    <section
      id="process"
      className="w-full py-20 text-[color:var(--color-text)] bg-[color:var(--color-bg)]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[color:var(--color-heading)]">
            Our Process
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
            A simple, structured approach designed for clarity and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* 1 — Consultation */}
          <div className="group flex flex-row mb-2 overflow-hidden rounded-[var(--radius-base)] border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-2xl">
            {/* TEXT */}
            <div className="flex-1 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center rounded-xl px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(16,185,129,0.22)",
                    color: "rgba(16,185,129,1)",
                  }}
                >
                  Step 01
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[color:var(--color-heading)]">
                  Consultation
                </h3>
              </div>

              <p className="mt-4 max-w-xl text-[15px] md:text-base leading-7 text-[color:var(--color-text-muted)]">
                We start by understanding your business, timelines, and goals—so we can recommend the right accounting
                and tax approach from day one.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-[color:var(--color-text-muted)]">
                {["Review current setup", "Identify risks + quick wins", "Define scope and next steps"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center justify-center rounded-[var(--radius-base)] bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-hover)]"
                >
                  Book a Call
                </a>
                <a
                  href="#services"
                  className="inline-flex w-fit items-center justify-center rounded-[var(--radius-base)] border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-[color:var(--color-bg-alt)]"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex-none w-1/2 overflow-hidden relative">
              <img
                src={ConsultationImg}
                alt="Consultation"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              {/* professional overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(17,24,39,0.92), rgba(17,24,39,0.35), rgba(17,24,39,0.15))",
                }}
              />
            </div>
          </div>

          {/* 2 — Strategy (reversed layout) */}
          <div className="group flex flex-row-reverse mb-2 overflow-hidden rounded-[var(--radius-base)] border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-2xl">
            {/* TEXT */}
            <div className="flex-1 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center rounded-xl px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(16,185,129,0.22)",
                    color: "rgba(16,185,129,1)",
                  }}
                >
                  Step 02
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[color:var(--color-heading)]">
                  Strategy Development
                </h3>
              </div>

              <p className="mt-4 max-w-xl text-[15px] md:text-base leading-7 text-[color:var(--color-text-muted)]">
                We design a tailored plan based on your numbers—covering bookkeeping structure, reporting cadence, and
                a tax strategy that supports growth.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-[color:var(--color-text-muted)]">
                {["Build the roadmap", "Set reporting + workflows", "Align tax planning with goals"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#pricing"
                  className="inline-flex w-fit items-center justify-center rounded-[var(--radius-base)] bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-hover)]"
                >
                  View Packages
                </a>
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center justify-center rounded-[var(--radius-base)] border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-[color:var(--color-bg-alt)]"
                >
                  Ask a Question
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex-none w-1/2 overflow-hidden relative">
              <img
                src={StrategyImg}
                alt="Strategy Development"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(17,24,39,0.92), rgba(17,24,39,0.35), rgba(17,24,39,0.15))",
                }}
              />
            </div>
          </div>

          {/* 3 — Support */}
          <div className="group flex flex-row mb-2 overflow-hidden rounded-[var(--radius-base)] border border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-2xl">
            {/* TEXT */}
            <div className="flex-1 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center rounded-xl px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    border: "1px solid rgba(16,185,129,0.22)",
                    color: "rgba(16,185,129,1)",
                  }}
                >
                  Step 03
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[color:var(--color-heading)]">
                  Implementation & Support
                </h3>
              </div>

              <p className="mt-4 max-w-xl text-[15px] md:text-base leading-7 text-[color:var(--color-text-muted)]">
                We implement the plan, keep everything on track, and stay available year-round—so you always know where
                you stand financially.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-[color:var(--color-text-muted)]">
                {["Execute + maintain workflows", "Monthly reporting & check-ins", "Ongoing advisory support"].map(
                  (item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex w-fit items-center justify-center rounded-[var(--radius-base)] bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-hover)]"
                >
                  Start Now
                </a>
                <a
                  href="#faq"
                  className="inline-flex w-fit items-center justify-center rounded-[var(--radius-base)] border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-[color:var(--color-bg-alt)]"
                >
                  Read FAQs
                </a>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex-none w-1/2 overflow-hidden relative">
              <img
                src={SupportImg}
                alt="Implementation & Support"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(17,24,39,0.92), rgba(17,24,39,0.35), rgba(17,24,39,0.15))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
