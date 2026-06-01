"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Position trackers
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports touch (don't show custom cursor on mobile)
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find if we are hovering over an interactive element
      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, [data-cursor]");
      
      if (interactiveEl) {
        setIsHovered(true);
        const text = interactiveEl.getAttribute("data-cursor-text") || "";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => {
      setIsHovered(false);
      setCursorText("");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    // Lerp (Linear Interpolation) loop for the outer ring (fluid trailing effect)
    let animationFrameId: number;
    const render = () => {
      const lerpFactor = 0.15; // Speed of the trailing ring
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small inner dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-secondary rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out scale-100"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      />
      {/* Smooth outer trailing ring */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-primary pointer-events-none z-[9998] flex items-center justify-center transition-all duration-300 ease-out mix-blend-difference ${
          isHovered
            ? "w-20 h-20 -ml-10 -mt-10 bg-off-white/90 border-transparent scale-110"
            : "scale-100"
        }`}
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-label-caps text-primary font-bold tracking-widest text-center animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
