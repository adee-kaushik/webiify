import { site, waLink } from '../data/Site';

const iconLink =
  "w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-brand-accent hover:border-brand-accent transition";

function Footer() {
  return (
    <footer id="footer" className="relative px-6 py-12 bg-brand-bg-dark text-gray-300 text-center overflow-hidden">
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-brand-teal/15 rounded-full blur-3xl animate-blob [animation-delay:6s]"></div>

      <div className="relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="font-display text-xl font-semibold text-white">{site.name}</div>

          <div className="flex gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={iconLink}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.83 14.13c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.71-4.12-4.85-4.31-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .54.01.17.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.8.87-1.07.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.35z" />
              </svg>
            </a>

            <a
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={iconLink}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a href={`mailto:${site.email}`} aria-label="Email" className={iconLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
        <p className="font-body text-sm text-gray-500 mt-8">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;