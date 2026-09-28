"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((module) => module.GitHubCalendar),
  {
    ssr: false,
    loading: () => <div className="github-calendar-loading" aria-hidden="true" />,
  },
);

export function GithubSection() {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [calendarSize, setCalendarSize] = useState({ blockSize: 13, blockMargin: 4, fontSize: 12 });

  useEffect(() => {
    const calendar = calendarRef.current;
    if (!calendar) return;

    const updateSize = (width: number) => {
      if (width <= 0) return;

      const blockMargin = width >= 720 ? 4 : width >= 480 ? 2 : 1;
      const blockSize = Math.max(1, Math.min(13, Math.floor((width + blockMargin) / 53) - blockMargin));
      const fontSize = Math.max(5, Math.min(12, Math.floor(blockSize * 0.9)));

      setCalendarSize((current) => (
        current.blockSize === blockSize
        && current.blockMargin === blockMargin
        && current.fontSize === fontSize
          ? current
          : { blockSize, blockMargin, fontSize }
      ));
    };

    const observer = new ResizeObserver(([entry]) => updateSize(entry.contentRect.width));
    observer.observe(calendar);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="github" className="section shell github-section" aria-labelledby="github-title">
      <div className="github-section-heading">
        <div>
          <p className="eyebrow">Open source activity</p>
          <h2 id="github-title" className="subheading">GitHub contributions.</h2>
        </div>
        <Link className="github-link" href="https://github.com/khenshi" target="_blank" rel="noreferrer">
          View profile <ArrowUpRight size={14} />
        </Link>
      </div>
      <div ref={calendarRef} className="github-calendar" aria-label="Khenyshi Hinlog's GitHub contribution calendar">
        <GitHubCalendar
          username="khenshi"
          colorScheme="light"
          blockSize={calendarSize.blockSize}
          blockMargin={calendarSize.blockMargin}
          fontSize={calendarSize.fontSize}
          theme={{ light: ["#dfdfd9", "#bacbbf", "#86a38f", "#52745e", "#244f3c"] }}
        />
      </div>
    </section>
  );
}
