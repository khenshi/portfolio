"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((module) => module.GitHubCalendar),
  {
    ssr: false,
    loading: () => <div className="min-h-32 w-full border border-line" aria-hidden="true" />,
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
    <section id="github" className="mx-auto w-full max-w-[1060px] border-t border-line py-20 max-[760px]:py-14" aria-labelledby="github-title">
      <div className="mb-8 flex items-end justify-between gap-8 max-[760px]:mb-6 max-[760px]:gap-[.9rem]">
        <div>
          <p className="mb-[.8rem] mt-0 text-[.72rem] font-bold uppercase tracking-[.13em] text-muted">Open source activity</p>
          <h2 id="github-title" className="m-0 max-w-[360px] text-[clamp(2rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-.045em]">GitHub contributions.</h2>
        </div>
        <Link className="inline-flex min-h-10 flex-none items-center gap-[.35rem] text-[.75rem] font-bold max-[760px]:mb-0" href="https://github.com/khenshi" target="_blank" rel="noreferrer">
          View profile <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
      <div ref={calendarRef} className="w-full min-w-0 overflow-hidden py-6 pb-2 text-muted md:[&_.react-activity-calendar__scroll-container]:flex md:[&_.react-activity-calendar__scroll-container]:justify-center" aria-label="Khenyshi Hinlog's GitHub contribution calendar">
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
