import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[color:var(--color-bg)] text-[color:var(--color-text)]"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="mx-auto max-w-6xl px-6 pt-14">

        {/* CTA STRIP */}
        <div
          className="mb-14 flex flex-col gap-6 rounded-[var(--radius-base)] border border-[color:var(--color-border)] bg-[color:var(--color-card)] p-6 md:flex-row md:items-center md:justify-between shadow-[var(--shadow-card)]"
        >
          <div>
            <p className="text-sm text-[color:var(--color-text-muted)]">
              Tax Consulting • Bookkeeping • Payroll
            </p>
            <h3 className="mt-1 text-xl font-semibold text-[color:var(--color-heading)]">
              Get clarity on your finances.
            </h3>
            <p className="mt-1 text-sm text-[color:var(--color-text-muted)]">
              Clean books, smart tax strategy, zero stress.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-[var(--radius-base)] bg-[color:var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-accent-hover)]"
            >
              Free Consultation
            </a>
            <a
              href="tel:+18776333005"
              className="rounded-[var(--radius-base)] border border-[color:var(--color-border)] px-6 py-3 text-sm font-semibold text-[color:var(--color-text)] transition hover:bg-[color:var(--color-bg-alt)]"
            >
              Call (+44) 7403 055269
            </a>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">

          {/* BRAND */}
          <div className="md:col-span-4">
            <h2 className="text-lg font-semibold text-[color:var(--color-heading)]">
              1500Accountants.com
            </h2>
            <p className="mt-3 text-sm text-[color:var(--color-text-muted)] leading-6">
              Professional tax consulting and bookkeeping services for startups,
              small businesses, and growing companies across the U.S.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Secure Client Portal", "QuickBooks Pro", "Year-Round Support"].map(item => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-text-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-[color:var(--color-heading)]">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-text-muted)]">
              {[
                "Tax Preparation",
                "Tax Planning",
                "Bookkeeping",
                "Payroll",
                "Business Formation",
                "Audit Support"
              ].map(item => (
                <li key={item}>
                  <a href="#services" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-[color:var(--color-heading)]">
              Resources
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-text-muted)]">
              {[
                "Pricing",
                "FAQs",
                "Client Portal",
                "Tax Savings Guide",
                "Blog"
              ].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-[color:var(--color-heading)]">
              Contact
            </h4>

            <div className="mt-4 space-y-3 text-sm text-[color:var(--color-text-muted)]">
              <p>(+44) 7403-055269</p>
              <p>hello@1500accountants.com</p>
              <p>Serving clients nationwide</p>
            </div>

            <a
              href="https://wa.me/447403055269"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-[var(--radius-base)] border border-[color:var(--color-border)] px-5 py-3 text-sm font-semibold transition hover:bg-[color:var(--color-bg-alt)]"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 border-t border-[color:var(--color-border)] py-6 text-xs text-[color:var(--color-text-muted)]">
          <div className="flex flex-col gap-3 md:flex-row md:justify-between">
            <p>© {new Date().getFullYear()} 1500Accountants.com. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Do Not Sell</a>
            </div>
          </div>

          <p className="mt-3 max-w-3xl leading-5">
            Disclaimer: Information on this site is for general informational
            purposes only and does not constitute tax or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
