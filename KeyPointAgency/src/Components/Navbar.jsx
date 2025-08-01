import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">KeyPointAgency</a> 
      </div>
      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#propiedades">Propiedades</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="btn btn-primary">Login</button>
        <button className="btn btn-primary">Registrarse</button>
      </div>
    </nav>
  );
};

export default Navbar;