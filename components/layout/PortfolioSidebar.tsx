"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
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
      'a[href], button:not([disabled])',
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
          'a[href], button:not([disabled])',
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

  return (
    <>
      <div className="mobile-nav-bar">
        <button
          ref={menuButtonRef}
          type="button"
          className="mobile-menu-button"
          aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
          aria-controls="portfolio-navigation"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Link className="mobile-wordmark" href="/" aria-label="Khenyshi Hinlog, overview">
          KH<span>.</span>
        </Link>
        <span className="mobile-nav-caption">Portfolio</span>
      </div>

      {isMobileOpen && (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close navigation"
          tabIndex={-1}
          onClick={() => closeMobileNavigation()}
        />
      )}

      <aside
        ref={sidebarRef}
        id="portfolio-navigation"
        className={`portfolio-sidebar${isCollapsed ? " is-collapsed" : ""}${isMobileOpen ? " is-mobile-open" : ""}`}
        role={isMobileOpen ? "dialog" : undefined}
        aria-label="Portfolio navigation"
        aria-modal={isMobileOpen || undefined}
      >
        <div className="sidebar-brand-row">
          <Link className="sidebar-wordmark" href="/" aria-label="Khenyshi Hinlog, overview">
            KH<span>.</span>
            <small>Khenyshi Hinlog</small>
          </Link>
          <button
            type="button"
            className="sidebar-mobile-close"
            aria-label="Close navigation"
            onClick={() => closeMobileNavigation()}
          >
            <X size={18} />
          </button>
        </div>

        <p className="sidebar-section-label">Portfolio</p>
        <nav className="sidebar-links" aria-label="Main navigation">
          {navigation.map(({ label, href, icon: Icon }) => {
            const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`sidebar-link${isActive ? " is-active" : ""}`}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                title={isCollapsed ? label : undefined}
                onClick={() => {
                  setIsMobileOpen(false);
                  requestAnimationFrame(() => document.getElementById("main-content")?.focus());
                }}
              >
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <a className="sidebar-contact" href="mailto:hinlogkhenyshi@gmail.com">
            {!isCollapsed && <span>Get in touch</span>}
            <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            className="sidebar-collapse-button"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-expanded={!isCollapsed}
            aria-controls="portfolio-navigation"
            onClick={() => setIsCollapsed((collapsed) => !collapsed)}
          >
            {isCollapsed ? <ChevronRight size={17} /> : <ChevronLeft size={17} />}
            {!isCollapsed && <span>Collapse sidebar</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
