import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
            W
          </div>
          <span className="text-2xl font-bold text-gray-900">Webstore</span>
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#templates" className="hover:text-blue-600">Templates</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#footer" className="hover:text-blue-600">Contact</a></li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
          <span className="w-6 h-0.5 bg-gray-900"></span>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-gray-700 font-medium">
          <li><a href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</a></li>
          <li><a href="#templates" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Templates</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</a></li>
          <li><a href="#footer" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;