import React from "react";
import './styles/index.css';

const MiComponente = () => {
  return (
    <div className="text-center p-4">
      {/* Botón Azul */}
      <button className="mi-boton-azul">
        ¡Haz clic aquí!
      </button>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gray-300 p-4 rounded-lg">Elemento </div>
        <div className="bg-gray-300 p-4 rounded-lg">Elemento 2</div>
        <div className="bg-gray-300 p-4 rounded-lg">Elemento 3</div>
        <div className="bg-gray-300 p-4 rounded-lg">Elemento 44</div>
      </div>
    </div>

    
  );
};


export default MiComponente;
