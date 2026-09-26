import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="px-6 py-4 bg-brand-bg dark:bg-brand-bg-dark border-b border-brand-teal/10 dark:border-white/10 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-teal flex items-center justify-center text-white font-display font-semibold text-sm">
            W
          </div>
          <span className="font-display text-2xl font-semibold text-brand-text dark:text-white">Webstore</span>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 font-body text-brand-text dark:text-gray-300 font-medium">
            <li><a href="#" className="hover:text-brand-teal dark:hover:text-brand-accent">Home</a></li>
            <li><a href="#templates" className="hover:text-brand-teal dark:hover:text-brand-accent">Templates</a></li>
            <li><a href="#about" className="hover:text-brand-teal dark:hover:text-brand-accent">About</a></li>
            <li><a href="#footer" className="hover:text-brand-teal dark:hover:text-brand-accent">Contact</a></li>
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1.5 rounded-full border border-brand-teal/20 dark:border-white/20 text-sm dark:text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="w-6 h-0.5 bg-brand-text dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-brand-text dark:bg-white"></span>
            <span className="w-6 h-0.5 bg-brand-text dark:bg-white"></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 font-body text-brand-text dark:text-gray-300 font-medium">
          <li><a href="#" onClick={() => setIsOpen(false)} className="hover:text-brand-teal">Home</a></li>
          <li><a href="#templates" onClick={() => setIsOpen(false)} className="hover:text-brand-teal">Templates</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-brand-teal">About</a></li>
          <li><a href="#footer" onClick={() => setIsOpen(false)} className="hover:text-brand-teal">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;