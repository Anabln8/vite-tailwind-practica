// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#282828] text-white py-10 mt-14">
      <div className="max-w-6xl mx-auto text-center">
        {/* Enlaces a redes sociales */}
        <div className="mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-blue-700">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-blue-600">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-4 text-white hover:text-pink-700">
            Instagram
          </a>
        </div>

        {/* Texto del copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Mi Tienda Online. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
