"use client";

import { useEffect, useRef, type ReactNode, type ElementType } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function SectionReveal({ children, className = "", as: Tag = "section" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("magazine-active");
          }
        });
      },
      { 
        threshold: 0.05, // Trigger as soon as the top of the section enters the frame
        rootMargin: "0px 0px -80px 0px"
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`magazine-reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
