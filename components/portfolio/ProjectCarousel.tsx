"use client";

import {
  Children,
  useCallback,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCarouselProps = {
  children: ReactNode;
  label: string;
};

export function ProjectCarousel({ children, label }: ProjectCarouselProps) {
  const slideCount = Children.count(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];

    if (!track || !slide || index < 0 || index >= slideCount) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [slideCount]);

  const updateActiveSlide = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;

      const slideCenter = slide.getBoundingClientRect().left + slide.clientWidth / 2;
      const distance = Math.abs(trackCenter - slideCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((currentIndex) => currentIndex === closestIndex ? currentIndex : closestIndex);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === "ArrowLeft" && activeIndex > 0) {
      event.preventDefault();
      scrollToSlide(activeIndex - 1);
    } else if (event.key === "ArrowRight" && activeIndex < slideCount - 1) {
      event.preventDefault();
      scrollToSlide(activeIndex + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      scrollToSlide(0);
    } else if (event.key === "End") {
      event.preventDefault();
      scrollToSlide(slideCount - 1);
    }
  };

  return (
    <div className="[--project-slide-size:min(36vw,24rem)] max-[760px]:[--project-slide-size:min(82vw,calc(100vw-6rem),27rem)]" role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        id="overview-project-track"
        ref={trackRef}
        className="relative flex w-full items-stretch gap-4 overflow-x-auto overflow-y-hidden px-[calc((100%-var(--project-slide-size))/2)] py-5 pb-7 [overscroll-behavior-inline:contain] [scroll-padding-inline:calc((100%-var(--project-slide-size))/2)] [scroll-snap-type:x_mandatory] [scrollbar-color:var(--line)_transparent] [scrollbar-width:thin] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 max-[760px]:py-2 max-[760px]:pb-4"
        tabIndex={0}
        aria-label="Project cards"
        onScroll={updateActiveSlide}
        onKeyDown={handleKeyDown}
      >
        {Children.map(children, (child, index) => (
          <div
            key={index}
            ref={(element) => { slideRefs.current[index] = element; }}
            className={`relative flex min-w-0 flex-[0_0_var(--project-slide-size)] transform-gpu scroll-mx-auto snap-center [transform-style:preserve-3d] transition-transform duration-[250ms] ease-in-out ${activeIndex === index ? "z-[2] scale-100" : index < activeIndex ? "scale-[.84] rotate-y-[9deg] origin-right max-[760px]:scale-[.9] max-[760px]:rotate-y-[5deg]" : "scale-[.84] rotate-y-[-9deg] origin-left max-[760px]:scale-[.9] max-[760px]:rotate-y-[-5deg]"}`}
            data-active={activeIndex === index}
            data-side={index < activeIndex ? "before" : "after"}
            role="group"
            aria-roledescription="slide"
            aria-label={`Project ${index + 1} of ${slideCount}`}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="mt-1 flex items-center justify-end gap-[.55rem]">
        <span className="mr-[.45rem] text-[.7rem] tabular-nums text-muted" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} <span>/</span> {String(slideCount).padStart(2, "0")}
        </span>
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          Project {activeIndex + 1} of {slideCount}
        </span>
        <button
          className="inline-grid h-[2.6rem] w-[2.6rem] place-items-center border border-line bg-[color-mix(in_srgb,var(--white)_34%,var(--paper))] text-ink transition-[border-color,color,opacity] duration-200 hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:cursor-default disabled:opacity-45"
          type="button"
          aria-label="Previous project"
          aria-controls="overview-project-track"
          disabled={activeIndex === 0}
          onClick={() => scrollToSlide(activeIndex - 1)}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          className="inline-grid h-[2.6rem] w-[2.6rem] place-items-center border border-line bg-[color-mix(in_srgb,var(--white)_34%,var(--paper))] text-ink transition-[border-color,color,opacity] duration-200 hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:cursor-default disabled:opacity-45"
          type="button"
          aria-label="Next project"
          aria-controls="overview-project-track"
          disabled={activeIndex >= slideCount - 1}
          onClick={() => scrollToSlide(activeIndex + 1)}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
