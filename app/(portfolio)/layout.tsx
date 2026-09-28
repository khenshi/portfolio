import Link from "next/link";

import { PortfolioSidebar } from "@/components/layout/PortfolioSidebar";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/khenshi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khenyshi-hinlog-27269539b/" },
];

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <PortfolioSidebar />
      <div className="portfolio-main-column">
        <main id="main-content" className="portfolio-main" tabIndex={-1}>
          {children}
        </main>
        <footer className="footer shell portfolio-footer">
          <p>© {new Date().getFullYear()} Khenyshi Hinlog</p>
          <div>
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
