// src/components/AboutUs/AboutUs.js
import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section" id="servicios">
      <div className="about-us-content">
        <h2>¿Por qué elegirnos?</h2>
        <p>
          Somos una inmobiliaria con años de experiencia en el mercado, comprometidos a ayudarte a encontrar
          la propiedad perfecta para vos. Ofrecemos un servicio personalizado, transparente y eficiente.
        </p>
        <ul>
          <li>Asesoramiento experto</li>
          <li>Amplia cartera de propiedades</li>
          <li>Proceso de compra/alquiler simplificado</li>
          <li>Soporte post-venta/alquiler</li>
        </ul>
        <button className="btn btn-primary">Conocé nuestros servicios</button>
      </div>
      <div className="about-us-image">
        {/* Puedes añadir una imagen o ilustración aquí */}
        <img src="https://source.unsplash.com/random/600x400/?office,realestate" alt="Oficina de Inmobiliaria" />
      </div>
    </section>
  );
};

export default AboutUs;