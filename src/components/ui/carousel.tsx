"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ children }: { children: React.ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-3xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute -left-14 top-1/2 transform -translate-y-1/2 rounded-full p-2 text-blue-950 disabled:opacity-50"
      >
        <ChevronLeft className="w-9 h-9" />
      </button>
      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute -right-14 top-1/2 transform -translate-y-1/2 rounded-full  p-2 text-black disabled:opacity-50"
      >
        <ChevronRight className="w-9 h-9" />
      </button>
    </div>
  );
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
  return <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33%] p-2">{children}</div>;
}
