"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderKanban,
  House,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TicTacToe } from "@/components/games/TicTacToe";

const navigation = [
  { label: "Overview", href: "/", icon: House },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Experience", href: "/experience", icon: BriefcaseBusiness },
  { label: "Certifications", href: "/certifications", icon: Award },
  { label: "Online Notes", href: "/notes", icon: FileText },
];

export function PortfolioSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);

  const closeMobileNavigation = (returnFocus = true) => {
    setIsMobileOpen(false);
    if (returnFocus) {
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!isMobileOpen) return;

    const firstFocusable = sidebarRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), select, summary',
    );
    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobileNavigation();
        return;
      }

      if (event.key !== "Tab" || !sidebarRef.current) return;
      const focusable = Array.from(
        sidebarRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), select, summary',
        ),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  const focusRing = "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-3";
  const collapsedDesktop = isCollapsed
    ? "md:w-full md:items-center md:justify-center md:px-[.4rem]"
    : "";

  return (
    <>
      <div className="sticky top-0 z-[55] flex h-[3.75rem] items-center gap-[.85rem] border-b border-line bg-[color-mix(in_srgb,var(--paper)_94%,transparent)] px-4 backdrop-blur-[12px] md:hidden">
        <button
          ref={menuButtonRef}
          type="button"
          className={`inline-flex h-10 w-10 flex-none items-center justify-center border border-line bg-transparent text-ink md:hidden ${focusRing}`}
          aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
          aria-controls="portfolio-navigation"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <Link className="inline-flex items-center gap-0 text-[1.05rem] font-extrabold tracking-[-.05em]" href="/" aria-label="Khenyshi Hinlog, overview">
          KH<span className="text-accent">.</span>
        </Link>
        <span className="ml-auto text-[.72rem] uppercase tracking-[.08em] text-muted">Portfolio</span>
      </div>

      {isMobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[60] block border-0 bg-[rgb(24_32_28_/_35%)] md:hidden"
          aria-label="Close navigation"
          tabIndex={-1}
          onClick={() => closeMobileNavigation()}
        />
      )}

      <aside
        ref={sidebarRef}
        id="portfolio-navigation"
        className={`fixed inset-y-0 left-0 z-[61] flex h-dvh w-[min(19rem,calc(100vw-3.25rem))] flex-col overflow-y-auto border-r border-line bg-paper p-[1.1rem] shadow-[16px_0_50px_rgb(24_32_28_/_12%)] transition-[transform,visibility] duration-[220ms] ease-in-out md:sticky md:inset-auto md:top-0 md:z-20 md:h-screen md:w-64 md:translate-x-0 md:visible md:overflow-y-auto md:p-[1.45rem_1rem_1rem] md:shadow-none md:transition-none ${isMobileOpen ? "visible translate-x-0" : "invisible -translate-x-[103%]"} ${isCollapsed ? "is-collapsed md:w-[4.75rem] md:items-center md:px-[.65rem]" : ""}`}
        role={isMobileOpen ? "dialog" : undefined}
        aria-label="Portfolio navigation"
        aria-modal={isMobileOpen || undefined}
      >
        <div className="flex min-h-[2.6rem] items-center justify-between">
          <Link className={`inline-flex items-center gap-3 text-[1.2rem] font-extrabold tracking-[-.05em] ${isCollapsed ? "md:w-full md:justify-center" : ""}`} href="/" aria-label="Khenyshi Hinlog, overview">
            KH<span className="text-accent">.</span>
            <small className={isCollapsed ? "md:hidden" : "text-[.82rem] font-[650] tracking-[-.02em]"}>Khenyshi Hinlog</small>
          </Link>
          <button
            type="button"
            className={`inline-flex h-10 w-10 flex-none items-center justify-center border border-line bg-transparent text-ink md:hidden ${focusRing}`}
            aria-label="Close navigation"
            onClick={() => closeMobileNavigation()}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <p className={`mx-[.7rem] mb-[.7rem] mt-[2.75rem] text-[.65rem] font-bold uppercase tracking-[.13em] text-muted ${isCollapsed ? "md:hidden" : ""}`}>Portfolio</p>
        <nav className={`grid gap-[.3rem] ${isCollapsed ? "md:w-full md:items-center" : ""}`} aria-label="Main navigation">
          {navigation.map(({ label, href, icon: Icon }) => {
            const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`flex min-h-[2.85rem] items-center gap-[.8rem] border border-transparent px-[.72rem] py-[.65rem] text-[.82rem] font-semibold text-muted transition-[border-color,background-color,color] duration-200 ease-in-out hover:bg-ink/5 hover:text-ink ${focusRing} ${isActive ? "border-accent/20 bg-accent/10 text-accent-dark" : ""} ${collapsedDesktop}`}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                title={isCollapsed ? label : undefined}
                onClick={() => {
                  setIsMobileOpen(false);
                  requestAnimationFrame(() => document.getElementById("main-content")?.focus());
                }}
              >
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                <span className={isCollapsed ? "md:hidden" : ""}>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className={`mx-[.7rem] my-6 shrink-0 ${isCollapsed ? "md:hidden" : ""}`}>
          <TicTacToe />
        </div>

        <div className="mt-auto grid gap-[.55rem] pt-4">
          <a className={`flex min-h-[2.7rem] items-center justify-between gap-[.6rem] border border-line px-[.7rem] py-[.6rem] text-[.76rem] font-[650] text-ink hover:bg-ink/5 ${focusRing} ${collapsedDesktop}`} href="mailto:hinlogkhenyshi@gmail.com">
            <span className={isCollapsed ? "md:hidden" : ""}>Get in touch</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            className={`hidden min-h-[2.7rem] items-center justify-start gap-[.6rem] border border-line bg-transparent px-[.7rem] py-[.6rem] text-[.76rem] font-[650] text-ink hover:bg-ink/5 md:flex ${focusRing} ${collapsedDesktop}`}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!isCollapsed}
            aria-controls="portfolio-navigation"
            onClick={() => setIsCollapsed((collapsed) => !collapsed)}
          >
            {isCollapsed ? <ChevronRight size={17} aria-hidden="true" /> : <ChevronLeft size={17} aria-hidden="true" />}
            <span className={isCollapsed ? "md:hidden" : ""}>Collapse sidebar</span>
          </button>
        </div>
      </aside>
    </>
  );
}
