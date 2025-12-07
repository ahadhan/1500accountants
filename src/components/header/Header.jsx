import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Regions", href: "#regions" },
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
    <header className="sticky top-0 z-50 border-b border-border bg-bg-alt backdrop-blur">
    
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <div className="flex items-center gap-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-btn-dark" />
          <span className="text-text font-semibold tracking-tight">LedgerPath</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-text-muted hover:text-text transition"
            >
              {i.label}
            </a>
          ))}
        </nav>
</div>
        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-blue-500 px-4 py-2 text-white font-medium md:inline-block hover:bg-white hover:text-blue-500 tansition duration-300"
        >
          Free Consultation
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-border p-2 text-text-muted hover:text-text"
        >
          {/* 3-line icon */}
          <span className="sr-only">Open menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-text"></span>
            <span className="block h-0.5 w-6 bg-text"></span>
            <span className="block h-0.5 w-6 bg-text"></span>
          </div>
        </button>
      </div>

      {/* Drawer + overlay (portal keeps it outside stacking issues) */}
      {createPortal(
        <>
          {/* Overlay */}
          <div
            className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 ${
              open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!open}
          />

          {/* Panel */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] transform border-l border-border bg-bg-alt shadow-xl transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            ref={drawerRef}
          >
            <div className="flex items-center justify-between border-b border-border px-4 h-16">
              <span className="text-text font-semibold">Menu</span>
              <button
                ref={firstFocusable}
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-text-muted hover:text-text"
              >
                <span className="sr-only">Close</span>
                {/* X icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" className="fill-current">
                  <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.9a1 1 0 0 0 1.41-1.41L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4Z" />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-4">
              <ul className="space-y-2">
                {NAV_ITEMS.map((i) => (
                  <li key={i.href}>
                    <a
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-text hover:bg-bg"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-btn-dark px-4 py-3 text-btn-dark-text font-semibold"
              >
                Free Consultation
              </a>
            </nav>

            <div className="mt-auto p-4 text-xs text-text-muted">
              © {new Date().getFullYear()} LedgerPath
            </div>
          </aside>
        </>,
        document.body
      )}
    </header>
  );
}
