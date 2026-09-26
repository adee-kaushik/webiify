function Footer() {
  return (
    <footer id="footer" className="px-6 py-12 bg-brand-bg-dark text-gray-300 text-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="font-display text-xl font-semibold text-white">Webstore</div>

        <div className="flex gap-6 font-body">
          <a href="https://wa.me/919351219914" className="hover:text-brand-accent">
            WhatsApp
          </a>
          <a href="https://instagram.com/web.store.in" className="hover:text-brand-accent">
            Instagram
          </a>
          <a href="mailto:webstore.templates@gmail.com" className="hover:text-brand-accent">
            Email
          </a>
        </div>
      </div>
      <p className="font-body text-sm text-gray-500 mt-8">
        © 2026 Webstore. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;