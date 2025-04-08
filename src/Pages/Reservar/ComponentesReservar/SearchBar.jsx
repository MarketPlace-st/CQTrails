"use client"

import React from 'react'
import "./SearchBar.css"

const SearchBar = ({ vehicles = [], filters, onFilterChange }) => {
  // Extraer marcas únicas de los vehículos
  const brands = vehicles ? [...new Set(vehicles.map(vehicle => vehicle?.brand))] : []

  return (
    <div className="search-bar">
      <div className="search-dropdowns">
        <div className="search-dropdown">
          <label>Marca</label>
          <select>
            <option value="">Todas las marcas</option>
            {brands.map((brand, index) => (
              brand && <option key={index} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        <div className="search-dropdown">
          <label>Modelo</label>
          <select 
            value={filters.model} 
            onChange={(e) => onFilterChange('model', e.target.value)}
          >
            <option value="">Todos</option>
            <option value="RAV4">RAV4</option>
            <option value="Corolla">Corolla</option>
            <option value="Camry">Camry</option>
          </select>
        </div>
        <div className="search-dropdown">
          <label>Año</label>
          <select 
            value={filters.year} 
            onChange={(e) => onFilterChange('year', e.target.value)}
          >
            <option value="">Todos</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchBar





