import React from 'react';

const INDUSTRIES = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    desc: 'Financial solutions for clinics, practices, and health providers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8" />
      </svg>
    ),
  },
  {
    id: 'saas',
    title: 'SaaS & Tech',
    desc: 'Billing, revenue recognition and cashflow tools for growing platforms.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    desc: 'Payments, reconciliations and working capital solutions for merchants.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-2 14H5L3 3z" />
      </svg>
    ),
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    desc: 'Inventory-aware financing and supplier payment workflows.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 6v8M17 6v8" />
      </svg>
    ),
  },
  {
    id: 'professional',
    title: 'Professional Services',
    desc: 'Project invoicing, time-to-bill and cashflow visibility for firms.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM6 21v-2a4 4 0 018 0v2" />
      </svg>
    ),
  },
  {
    id: 'nonprofit',
    title: 'Non-profit',
    desc: 'Grant tracking, donor reporting and fund accounting support.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2 0-4 1.5-4 3v5h8v-5c0-1.5-2-3-4-3zM12 2v4" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="industries">
      <div className="w-full sm:px-6 lg:px-8 py-20 bg-bg-alt text-text">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {INDUSTRIES.map((item) => (
            <article
              key={item.id}
              className="group bg-bg rounded-2xl p-6 shadow-md hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-none rounded-lg bg-btn-dark text-btn-dark-text p-3 shadow-sm group-hover:scale-110 transition-transform ">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-text">{item.title}</h3>
                  <p className="text-text-muted mb-4">{item.desc}</p>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-btn-dark-text bg-btn-dark px-3 py-2 rounded-lg hover:opacity-90 transition"
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
