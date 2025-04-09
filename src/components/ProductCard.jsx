// src/components/ProductCard.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

export function ProductCard({ nombre, precio, imagen }) {
  const [likes, setLikes] = useState(0);

  return (
    <div id='productos' className="bg-white shadow-md rounded-2xl p-4 text-center">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-xl font-semibold">{nombre}</h3>
      <p className="text-gray-600 mb-2">€{precio}</p>
      <button
        onClick={() => setLikes(likes + 1)}
        className="cursor-pointer bg-white border-2 border-[#282828] text-[#282828] px-4 py-1 rounded-lg hover:border-[#c56262] hover:text-[#c56262] transition-colors duration-300 cur"
      >
        ❤️ Me gusta ({likes})
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
};
