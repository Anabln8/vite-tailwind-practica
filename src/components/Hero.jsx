// src/components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('src/assets/images/camiseta.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Filtro oscuro */}
      <div className="relative z-10 px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a Mi Tienda</h1>
        <p className="text-lg md:text-xl mb-6">Encuentra los mejores productos al mejor precio</p>
        <a href="#productos" className="bg-blue-500 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-blue-600 transition duration-300">Ver Productos</a>
      </div>
    </section>
  );
}

export default Hero;
