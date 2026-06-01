"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  delay?: number; // Starting delay in ms
  stagger?: number; // Stagger delay between words in ms
  once?: boolean; // Only trigger once
}

export default function TextReveal({
  text,
  className = "",
  as: Tag = "p",
  delay = 0,
  stagger = 40,
  once = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setHasIntersected(false);
        }
      },
      {
        threshold: 0.15, // Fire when 15% is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before it fully hits viewport center
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const words = text.split(/\s+/);

  return (
    <Tag
      ref={containerRef as any}
      className={`flex flex-wrap ${className}`}
      style={{
        perspective: "1000px", // Enable 3D transitions for magazine turn feel
      }}
    >
      {words.map((word, index) => {
        // Simple regex to keep punctuation attached to the word
        const cleanWord = word;
        return (
          <span
            key={index}
            className="inline-block overflow-hidden mr-[0.25em] py-[0.1em]"
          >
            <span
              className={`inline-block origin-bottom-left will-change-transform transition-all`}
              style={{
                transform: hasIntersected
                  ? "translate3d(0, 0, 0) rotateX(0deg)"
                  : "translate3d(0, 110%, 0) rotateX(15deg)",
                opacity: hasIntersected ? 1 : 0,
                transitionDuration: "800ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // Magazine turn tempo
                transitionDelay: `${delay + index * stagger}ms`,
              }}
            >
              {cleanWord}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
