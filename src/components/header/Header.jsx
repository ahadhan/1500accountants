import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Logo from "../../assets/images/logo.png";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const firstFocusable = useRef(null);
  const drawerRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus first item when opened
  useEffect(() => {
    if (open) firstFocusable.current?.focus();
  }, [open]);

  // Close when clicking outside panel
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-[color:var(--color-border)]
        bg-[color:var(--color-bg)]
      "
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Subtle premium background like your cards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[color:var(--color-bg)]/70 backdrop-blur" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(70% 55% at 15% 0%, rgba(16,185,129,0.22), transparent 60%), radial-gradient(55% 45% at 85% 15%, rgba(255,255,255,0.06), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-10 opacity-50"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.10), transparent)",
          }}
        />
      </div>

      {/* ✅ Responsive container */}
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand + Desktop nav */}
        <div className="flex items-center gap-4 sm:gap-8 min-w-0">
          {/* ✅ Responsive brand: fixed logo size + truncation */}
          <a href="#home" className="group flex items-center gap-3 min-w-0">
            <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <span
                className="absolute inset-0 opacity-80"
                style={{
                  background:
                    "radial-gradient(60% 60% at 30% 25%, rgba(255,255,255,0.20), transparent 55%)",
                }}
              />
              <img src={Logo} alt="Logo" className="relative h-8 w-8 object-contain" />
            </span>

            <span className="truncate text-sm sm:text-base text-[color:var(--color-heading)] font-semibold tracking-tight">
              1-500 Accountants
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="
                  relative text-sm font-medium
                  text-[color:var(--color-text-muted)]
                  transition
                  hover:text-[color:var(--color-text)]
                "
              >
                {i.label}
                {/* ✅ Minimal underline accent on hover */}
                <span
                  className="
                    pointer-events-none absolute left-0 -bottom-2
                    h-[2px] w-0
                    bg-[color:var(--color-accent)]
                    transition-all duration-300
                    group-hover:w-0
                  "
                />
              </a>
            ))}
          </nav>
        </div>

        {/* Desktop CTA */}
        <a
          href="#scheduleForm"
          className="
            hidden md:inline-flex items-center justify-center
            rounded-[var(--radius-base)]
            bg-[color:var(--color-accent)]
            px-4 py-2
            text-sm font-semibold text-white
            transition
            hover:bg-[color:var(--color-accent-hover)]
            focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/30
          "
        >
          Free Consultation
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="
            md:hidden inline-flex items-center justify-center
            rounded-[var(--radius-base)]
            border border-white/10 bg-white/5
            p-2
            text-[color:var(--color-text)]
            transition
            hover:bg-white/10
            focus:outline-none focus:ring-2 focus:ring-white/15
          "
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-[color:var(--color-text)]"></span>
            <span className="block h-0.5 w-6 bg-[color:var(--color-text)]"></span>
            <span className="block h-0.5 w-6 bg-[color:var(--color-text)]"></span>
          </div>
        </button>
      </div>

      {/* Drawer + overlay */}
      {createPortal(
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] transition-opacity duration-200 ${
              open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!open}
            onClick={() => setOpen(false)}
          />

          {/* ✅ Responsive panel width */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className={`fixed right-0 top-0 z-50 h-full w-[88vw] max-w-[360px] transform transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            ref={drawerRef}
          >
            <div
              className="
                relative flex h-full flex-col
                border-l border-[color:var(--color-border)]
                bg-[color:var(--color-card)]
                shadow-2xl
                overflow-hidden
              "
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(70% 55% at 10% 0%, rgba(16,185,129,0.18), transparent 60%), radial-gradient(60% 40% at 90% 20%, rgba(255,255,255,0.06), transparent 55%)",
                }}
              />

              <div className="relative flex items-center justify-between border-b border-[color:var(--color-border)] px-4 h-16">
                <span className="text-[color:var(--color-heading)] font-semibold">Menu</span>
                <button
                  ref={firstFocusable}
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="
                    inline-flex items-center justify-center
                    rounded-[var(--radius-base)]
                    border border-white/10 bg-white/5
                    p-2
                    text-[color:var(--color-text)]
                    transition
                    hover:bg-white/10
                    focus:outline-none focus:ring-2 focus:ring-white/15
                  "
                >
                  <span className="sr-only">Close</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                    <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.9a1 1 0 0 0 1.41-1.41L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4Z" />
                  </svg>
                </button>
              </div>

              <nav className="relative px-4 py-4">
                <ul className="space-y-2">
                  {NAV_ITEMS.map((i) => (
                    <li key={i.href}>
                      <a
                        href={i.href}
                        onClick={() => setOpen(false)}
                        className="
                          block rounded-[var(--radius-base)]
                          border border-transparent
                          px-3 py-3
                          text-sm font-medium
                          text-[color:var(--color-text)]
                          transition
                          hover:border-white/10 hover:bg-white/5
                        "
                      >
                        {i.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="#scheduleForm"
                  onClick={() => setOpen(false)}
                  className="
                    mt-4 inline-flex w-full items-center justify-center
                    rounded-[var(--radius-base)]
                    bg-[color:var(--color-accent)]
                    px-4 py-3
                    text-sm font-semibold text-white
                    transition
                    hover:bg-[color:var(--color-accent-hover)]
                  "
                >
                  Free Consultation
                </a>
              </nav>

              <div className="relative mt-auto p-4 text-xs text-[color:var(--color-text-muted)]">
                © {new Date().getFullYear()} 1-500 Accountants
              </div>
            </div>
          </aside>
        </>,
        document.body
      )}
    </header>
  );
}
