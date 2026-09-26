import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-900">WebStore</div>
      <ul className="flex gap-6 text-gray-700 font-medium">
  <li><a href="#" className="cursor-pointer hover:text-blue-600">Home</a></li>
  <li><a href="#templates" className="cursor-pointer hover:text-blue-600">Templates</a></li>
  <li><a href="#about" className="cursor-pointer hover:text-blue-600">About</a></li>
  <li><a href="#footer" className="cursor-pointer hover:text-blue-600">Contact</a></li>
</ul>
    </nav>
  );
}

export default Navbar;