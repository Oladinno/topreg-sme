"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services", cursor: "WORK" },
  { href: "/community", label: "Community", cursor: "PEOPLE" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-surface/80 dark:bg-deep-black/80 backdrop-blur-xl border-b border-primary/10 dark:border-off-white/10 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-margin-edge py-6 max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-lg text-body-lg font-bold tracking-tighter text-primary dark:text-off-white cursor-none"
          data-cursor-text="HOME"
        >
          TOP REG SME
        </Link>
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
          <Link
            href="/contact"
            className={
              pathname === "/contact"
                ? "text-primary dark:text-tertiary-fixed border-b-2 border-primary dark:border-tertiary-fixed pb-1 font-label-caps text-label-caps hover:text-secondary transition-colors duration-300 cursor-none"
                : "text-on-surface-variant dark:text-cool-gray font-label-caps text-label-caps hover:text-secondary transition-colors duration-300 cursor-none"
            }
            data-cursor-text="ABOUT"
          >
            About
          </Link>
        </nav>
        <Link
          href="/contact"
          className="bg-primary text-off-white px-6 py-2 font-label-caps text-label-caps hover:bg-secondary transition-colors duration-300 active:opacity-70 cursor-none"
          data-cursor-text="TALK"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
