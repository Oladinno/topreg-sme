"use client";

import React, { useRef, useEffect, useState } from "react";

interface ParallaxElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Speed multiplier (e.g., -0.2 for slower, 0.2 for faster movement)
}

export default function ParallaxElement({
  children,
  className = "",
  speed = -0.15,
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isVisible = false;
    
    // Observer to track if the element is in the viewport to avoid unnecessary scroll calculations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0 }
    );
    observer.observe(el);

    const handleScroll = () => {
      if (!isVisible) return;
      
      const rect = el.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Calculate how far the center of the element is from the center of the viewport
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Calculate shift based on scroll distance and speed factor
      const yOffset = distanceFromCenter * speed;
      
      setTranslateY(yOffset);
    };

    const onScrollTick = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScrollTick, { passive: true });
    
    // Initial run
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollTick);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={{
        transform: `translate3d(0, ${translateY.toFixed(1)}px, 0)`,
        transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
    >
      {children}
    </div>
  );
}
