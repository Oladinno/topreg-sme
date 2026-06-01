"use client";

import React, { useRef, useState, useEffect } from "react";

interface InteractiveCanvasProps {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number; // 0 to 1, how much it pulls towards the cursor
  warpStrength?: number; // Degrees of max 3D tilt
  scaleOnHover?: number; // Scale factor on hover
  cursorText?: string; // Text to display in custom cursor (e.g. "VIEW", "PLAY")
}

export default function InteractiveCanvas({
  children,
  className = "",
  magneticStrength = 0.15,
  warpStrength = 15,
  scaleOnHover = 1.05,
  cursorText = "",
}: InteractiveCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)");
  const [isHovered, setIsHovered] = useState(false);

  // Use requestAnimationFrame for smooth styling updates
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    
    // Relative mouse position from center of element, from -0.5 to 0.5
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    // Calculate rotation (warp effect)
    const rotateX = -relY * warpStrength;
    const rotateY = relX * warpStrength;

    // Calculate translation (magnetic pull effect)
    const translateX = relX * rect.width * magneticStrength;
    const translateY = relY * rect.height * magneticStrength;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) scale(${scaleOnHover})`
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly reset on leave
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0) scale(1)");
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
      data-cursor-text={cursorText}
    >
      <div
        style={{
          transform: transform,
          transition: isHovered ? "none" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  );
}
