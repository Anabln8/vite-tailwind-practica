// src/components/SearchBar.jsx
import React from 'react';
import PropTypes from 'prop-types';


export function SearchBar({ search, setSearch }) {
    return (
      <input 
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-xl bg-white my-6 "
        />
      );
  }
  
  SearchBar.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
  };
  