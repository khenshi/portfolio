"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((module) => module.GitHubCalendar),
  {
    ssr: false,
    loading: () => <div className="github-calendar-loading" aria-hidden="true" />,
  },
);

export function GithubSection() {
  return (
    <section id="github" className="section shell split-section github-section" aria-labelledby="github-title">
      <div>
        <p className="eyebrow">Open source activity</p>
        <h2 id="github-title" className="subheading">GitHub contributions.</h2>
        <Link className="github-link" href="https://github.com/khenshi" target="_blank" rel="noreferrer">
          View profile <ArrowUpRight size={14} />
        </Link>
      </div>
      <div className="github-calendar" aria-label="Khenyshi Hinlog's GitHub contribution calendar">
        <GitHubCalendar
          username="khenshi"
          colorScheme="light"
          blockSize={13}
          blockMargin={4}
          fontSize={12}
          theme={{ light: ["#dfdfd9", "#bacbbf", "#86a38f", "#52745e", "#244f3c"] }}
        />
      </div>
    </section>
  );
}
