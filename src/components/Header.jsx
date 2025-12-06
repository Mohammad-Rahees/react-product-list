import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Rahees' Store</h1>
        <nav className="space-x-6 font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#cart" className="hover:text-blue-400 transition">Cart</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;