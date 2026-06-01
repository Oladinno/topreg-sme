"use client";

import { useEffect, useRef } from "react";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fields = form.querySelectorAll("div.group");
    fields.forEach((el) => {
      el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-10");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <form ref={formRef} className="space-y-12">
      <div className="group relative">
        <label className="font-label-caps text-label-caps block mb-2 text-cool-gray group-focus-within:text-primary transition-colors">
          FULL NAME
        </label>
        <input
          className="contact-input w-full bg-transparent border-none border-b-2 border-primary/10 py-4 px-0 focus:ring-0 font-body-lg placeholder:text-surface-variant text-primary outline-none"
          placeholder="Who are we speaking with?"
          type="text"
        />
        <div className="input-border absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
      </div>
      <div className="group relative">
        <label className="font-label-caps text-label-caps block mb-2 text-cool-gray group-focus-within:text-primary transition-colors">
          EMAIL ADDRESS
        </label>
        <input
          className="contact-input w-full bg-transparent border-none border-b-2 border-primary/10 py-4 px-0 focus:ring-0 font-body-lg placeholder:text-surface-variant text-primary outline-none"
          placeholder="Where can we reach you?"
          type="email"
        />
        <div className="input-border absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
      </div>
      <div className="group relative">
        <label className="font-label-caps text-label-caps block mb-2 text-cool-gray group-focus-within:text-primary transition-colors">
          PROJECT TYPE
        </label>
        <select className="contact-input w-full bg-transparent border-none border-b-2 border-primary/10 py-4 px-0 focus:ring-0 font-body-lg text-primary outline-none appearance-none">
          <option>Legal &amp; Registration</option>
          <option>Brand &amp; Structure</option>
          <option>Launch Strategy</option>
          <option>Growth Consultancy</option>
        </select>
        <div className="input-border absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
        <span className="material-symbols-outlined absolute right-0 bottom-4 pointer-events-none">
          expand_more
        </span>
      </div>
      <div className="group relative">
        <label className="font-label-caps text-label-caps block mb-2 text-cool-gray group-focus-within:text-primary transition-colors">
          YOUR VISION
        </label>
        <textarea
          className="contact-input w-full bg-transparent border-none border-b-2 border-primary/10 py-4 px-0 focus:ring-0 font-body-lg placeholder:text-surface-variant text-primary outline-none resize-none"
          placeholder="Tell us about your business goals..."
          rows={4}
        />
        <div className="input-border absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
      </div>
      <div className="pt-6">
        <button
          className="group flex items-center justify-center gap-4 bg-primary text-off-white px-10 py-6 font-headline-lg text-body-lg hover:bg-secondary transition-all duration-300 w-full md:w-auto"
          type="submit"
        >
          SEND MESSAGE
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
            arrow_forward
          </span>
        </button>
      </div>
    </form>
  );
}
