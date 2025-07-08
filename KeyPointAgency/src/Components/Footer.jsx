// src/components/Footer/Footer.js
import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>InmoApp</h3>
          <p>Tu mejor aliado para encontrar o vender tu propiedad.</p>
        </div>
        <div className="footer-column">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#propiedades">Propiedades</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Calle Falsa 123</p>
          <p>CP 1234, Ciudad, País</p>
          <p>Email: info@inmoapp.com</p>
          <p>Teléfono: +11 5555-5555</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} InmoApp. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;