function Footer() {
  return (
    <footer className="px-6 py-12 bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-white">Webiify</div>

        <div className="flex gap-6">
          <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-white">
            WhatsApp
          </a>
          <a href="https://instagram.com/webiify" className="hover:text-white">
            Instagram
          </a>
          <a href="mailto:adityaamishra7002@gmail.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-8">
        © 2026 Webiify. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;