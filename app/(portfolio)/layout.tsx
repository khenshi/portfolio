import Link from "next/link";

import { PortfolioSidebar } from "@/components/layout/PortfolioSidebar";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/khenshi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khenyshi-hinlog-27269539b/" },
];

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid min-h-screen min-h-dvh grid-cols-1 md:grid-cols-[16rem_minmax(0,1fr)] md:has-[.is-collapsed]:grid-cols-[4.75rem_minmax(0,1fr)]">
      <a
        className="fixed left-2.5 top-2.5 z-[100] -translate-y-[160%] bg-ink px-4 py-3 text-white transition-transform focus:translate-y-0 focus:outline-2 focus:outline-accent focus:outline-offset-3"
        href="#main-content"
      >
        Skip to content
      </a>
      <PortfolioSidebar />
      <div className="flex min-w-0 flex-col">
        <main
          id="main-content"
          className="mx-auto w-full min-w-0 max-w-[1440px] flex-1 px-4 pb-0 pt-7 focus:outline-none md:px-[clamp(1.25rem,4vw,3.5rem)] md:pt-[clamp(2rem,4.5vw,4.5rem)] max-[420px]:px-[.85rem]"
          tabIndex={-1}
        >
          {children}
        </main>
        <footer className="mx-auto mt-6 flex w-[calc(100%-2.5rem)] max-w-[1060px] justify-between border-t border-line py-5 text-[.7rem] text-muted max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-6">
          <p className="m-0">© {new Date().getFullYear()} Khenyshi Hinlog</p>
          <div className="flex gap-[1.3rem]">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                className="inline-flex min-h-10 items-center"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
