"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/services", label: "Services", cursor: "WORK" },
  { href: "/community", label: "Community", cursor: "PEOPLE" },
  { href: "/contact", label: "About", cursor: "ABOUT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="bg-surface/80 dark:bg-deep-black/80 backdrop-blur-xl border-b border-primary/10 dark:border-off-white/10 sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-margin-edge py-6 max-w-container-max mx-auto">
          <Link
            href="/"
            className="font-headline-lg text-body-lg font-bold tracking-tighter text-primary dark:text-off-white cursor-none"
            data-cursor-text="HOME"
          >
            TOP REG SME
          </Link>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "text-primary dark:text-tertiary-fixed border-b-2 border-primary dark:border-tertiary-fixed pb-1 font-label-caps text-label-caps hover:text-secondary transition-colors duration-300 cursor-none"
                      : "text-on-surface-variant dark:text-cool-gray font-label-caps text-label-caps hover:text-secondary transition-colors duration-300 cursor-none"
                  }
                  data-cursor-text={link.cursor}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          
          {/* Desktop Contact CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-primary text-off-white px-6 py-2 font-label-caps text-label-caps hover:bg-secondary transition-colors duration-300 active:opacity-70 cursor-none"
              data-cursor-text="TALK"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden font-label-caps text-label-caps text-primary dark:text-off-white hover:text-secondary transition-colors cursor-none px-4 py-2 border border-primary/10 dark:border-off-white/10"
            data-cursor-text={menuOpen ? "CLOSE" : "MENU"}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </header>

      {/* Luxury Fullscreen Mobile Navigation Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-deep-black text-off-white z-[999] flex flex-col justify-between p-12 md:hidden animate-fade-in">
          {/* Mobile Overlay Header */}
          <div className="flex justify-between items-center w-full">
            <span className="font-headline-lg text-body-lg font-bold tracking-tighter text-off-white">
              TOP REG SME
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="font-label-caps text-label-caps text-off-white hover:text-secondary transition-colors border border-off-white/20 px-4 py-2"
            >
              CLOSE
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex flex-col space-y-8 my-auto">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display-xl text-5xl sm:text-6xl hover:text-secondary transition-all ${
                    isActive ? "text-secondary font-bold" : "text-off-white/80"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span className="inline-block border-b border-off-white/10 pb-4 w-full">
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-display-xl text-5xl sm:text-6xl text-secondary hover:text-off-white transition-colors"
            >
              <span className="inline-block pb-4 w-full">
                Get Started &rarr;
              </span>
            </Link>
          </nav>

          {/* Mobile Overlay Footer info */}
          <div className="border-t border-off-white/10 pt-8 flex flex-col gap-2">
            <p className="font-label-caps text-label-caps text-cool-gray text-xs">
              CONNECT WITH US
            </p>
            <p className="font-body-md text-sm text-off-white/60">
              hello@topregsme.com.ng | +234 800 123 4567
            </p>
          </div>
        </div>
      )}
    </>
  );
}
