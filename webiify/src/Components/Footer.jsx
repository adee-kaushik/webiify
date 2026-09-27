function Footer() {
  return (
    <footer id="footer" className="relative px-6 py-12 bg-brand-bg-dark text-gray-300 text-center overflow-hidden">
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-brand-teal/15 rounded-full blur-3xl animate-blob [animation-delay:6s]"></div>

      <div className="relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="font-display text-xl font-semibold text-white">Webstore</div>

          <div className="flex gap-6 font-body">
            <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-brand-accent">
              WhatsApp
            </a>
            <a href="https://instagram.com/webstore" className="hover:text-brand-accent">
              Instagram
            </a>
            <a href="mailto:adityaamishra7002@gmail.com" className="hover:text-brand-accent">
              Email
            </a>
          </div>
        </div>
        <p className="font-body text-sm text-gray-500 mt-8">
          © 2026 Webstore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;