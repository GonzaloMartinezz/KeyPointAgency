import React from 'react';
import '../Styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
     <div className='d-flex align-items-center justify-content-center gap-4'>
       <input type="text" placeholder="Buscar por ubicación, tipo..." className="search-input" />
      <select className="search-select">
        <option value="">Tipo de Propiedad</option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
        <option value="terreno">Terreno</option>
      </select>
      <select className="search-select">
        <option value="">Estado</option>
        <option value="venta">Venta</option>
        <option value="alquiler">Alquiler</option>
      </select>
     </div>
     <div className='d-flex justify-content-center '>
       <button className="btn btn-primary search-btn">Buscar</button>
     </div>
    </div>
  );
};

export default SearchBar;