// src/components/HeroSection/HeroSection.js
import React from 'react';
import '../Styles/HeroSection.css';
// Importa una imagen de fondo para el hero si tienes una, o usa un fondo CSS
// import heroBg from './hero-background.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
        <h1>Encontrá tu lugar ideal</h1>
        <p>Miles de propiedades en alquiler y venta, al alcance de tu mano.</p>
        <button className="btn btn-primary">Explorar Propiedades</button>
      </div>
    </section>
  );
};

export default HeroSection;