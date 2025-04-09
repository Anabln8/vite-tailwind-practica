// src/App.jsx
import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ProductCard } from './components/ProductCard';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './style.css';

const productos = [
  {
    id: 1,
    nombre: 'Camiseta',
    precio: 19.99,
    imagen: 'src/assets/images/camiseta.jpg',
  },
  {
    id: 2,
    nombre: 'Pantalón',
    precio: 29.99,
    imagen: 'src/assets/images/pantalones.jpg',
  },
  {
    id: 3,
    nombre: 'Zapatos',
    precio: 49.99,
    imagen: 'src/assets/images/zapatos.jpg',
  },
];

function App() {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Estado para el orden de los productos

  // Función para ordenar los productos por precio
  const ordenarProductos = (productos) => {
    return productos.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    });
  };

  // Filtrar los productos según la búsqueda
  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase()),
  );

  // Ordenar los productos filtrados por precio
  const productosOrdenados = ordenarProductos([...productosFiltrados]);

  // Función para cambiar el orden
  const cambiarOrden = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <div>
        <Hero />
        {/* Aquí irán los otros componentes o contenido */}
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center mb-10 gap-8">
          <div className='basis-2/3'>
            <SearchBar search={search} setSearch={setSearch} />
          </div>
          <div className='basis-1/3'>
            {/* Botón para ordenar productos */}
            <button
              onClick={cambiarOrden}
              className="bg-[#282828] text-white py-2 px-4 rounded-lg my-6 mx-auto block cursor-pointer"
            >
              Ordenar por precio (
              {sortOrder === 'asc' ? 'Ascendente' : 'Descendente'})
            </button>
          </div>
        </div>

        {productosOrdenados.length === 0 ? (
          <p className="text-center text-gray-500">
            No se encontraron productos
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productosOrdenados.map((producto) => (
              <ProductCard
                key={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
