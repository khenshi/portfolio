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
    <div className="project-carousel" role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        id="overview-project-track"
        ref={trackRef}
        className="project-carousel-track"
        tabIndex={0}
        aria-label="Project cards"
        onScroll={updateActiveSlide}
        onKeyDown={handleKeyDown}
      >
        {Children.map(children, (child, index) => (
          <div
            key={index}
            ref={(element) => { slideRefs.current[index] = element; }}
            className="project-carousel-slide"
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

      <div className="project-carousel-controls">
        <span className="project-carousel-position" aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")} <span>/</span> {String(slideCount).padStart(2, "0")}
        </span>
        <span className="project-carousel-sr-only" aria-live="polite" aria-atomic="true">
          Project {activeIndex + 1} of {slideCount}
        </span>
        <button
          className="project-carousel-control"
          type="button"
          aria-label="Previous project"
          aria-controls="overview-project-track"
          disabled={activeIndex === 0}
          onClick={() => scrollToSlide(activeIndex - 1)}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          className="project-carousel-control"
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
