import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-black dark:bg-surface-container-lowest w-full pt-section-gap pb-gutter border-t-2 border-primary dark:border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-12 px-margin-edge gap-gutter max-w-container-max mx-auto">
        <div className="md:col-span-4">
          <h3 className="font-headline-lg text-headline-lg text-off-white mb-6">
            TopReg SME
          </h3>
          <p className="text-cool-gray font-body-md mb-8 max-w-xs">
            Architecting the future of corporate scaling. Minimalist precision, maximum impact.
          </p>
          <div className="flex space-x-4">
            <a 
              className="w-10 h-10 border border-off-white/20 flex items-center justify-center hover:border-secondary transition-colors cursor-none" 
              href="#"
              data-cursor-text="SHARE"
            >
              <span className="material-symbols-outlined text-off-white text-sm">share</span>
            </a>
            <a 
              className="w-10 h-10 border border-off-white/20 flex items-center justify-center hover:border-secondary transition-colors cursor-none" 
              href="#"
              data-cursor-text="MAIL"
            >
              <span className="material-symbols-outlined text-off-white text-sm">alternate_email</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-label-caps text-off-white mb-6">SERVICES</h5>
          <ul className="space-y-4">
            <li>
              <Link 
                className="text-cool-gray hover:text-secondary underline transition-all cursor-none" 
                href="/services"
                data-cursor-text="SETUP"
              >
                Legal Setup
              </Link>
            </li>
            <li>
              <Link 
                className="text-cool-gray hover:text-secondary underline transition-all cursor-none" 
                href="/services"
                data-cursor-text="BRAND"
              >
                Brand Dev
              </Link>
            </li>
            <li>
              <Link 
                className="text-cool-gray hover:text-secondary underline transition-all cursor-none" 
                href="/services"
                data-cursor-text="GROW"
              >
                Growth Lab
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="font-label-caps text-label-caps text-off-white mb-6">COMPANY</h5>
          <ul className="space-y-4">
            <li>
              <Link 
                className="text-cool-gray hover:text-secondary underline transition-all cursor-none" 
                href="#"
                data-cursor-text="INFO"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                className="text-cool-gray hover:text-secondary underline transition-all cursor-none" 
                href="#"
                data-cursor-text="JOBS"
              >
                Career
              </Link>
            </li>
            <li>
              <Link 
                className="text-cool-gray hover:text-secondary underline transition-all cursor-none" 
                href="#"
                data-cursor-text="PRESS"
              >
                Press Kit
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4 flex flex-col items-start md:items-end">
          <h5 className="font-label-caps text-label-caps text-off-white mb-6">STAY UPDATED</h5>
          <form className="w-full max-w-sm">
            <div className="relative">
              <input
                className="w-full bg-transparent border-b-2 border-off-white/20 py-4 focus:border-secondary focus:ring-0 text-off-white outline-none cursor-none"
                placeholder="Email address"
                type="email"
                data-cursor-text="TYPE"
              />
              <button 
                className="absolute right-0 bottom-4 text-secondary hover:translate-x-2 transition-transform cursor-none" 
                type="submit"
                data-cursor-text="SEND"
              >
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="px-margin-edge max-w-container-max mx-auto mt-section-gap">
        <div className="border-t border-off-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cool-gray font-body-md text-sm">
            &copy; 2024 TopReg SME. Bringing imagination into reality.
          </p>
          <div className="flex gap-8">
            <Link 
              className="text-cool-gray text-xs font-label-caps hover:text-off-white transition-colors cursor-none" 
              href="#"
              data-cursor-text="LEGAL"
            >
              Privacy Policy
            </Link>
            <Link 
              className="text-cool-gray text-xs font-label-caps hover:text-off-white transition-colors cursor-none" 
              href="#"
              data-cursor-text="LEGAL"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
