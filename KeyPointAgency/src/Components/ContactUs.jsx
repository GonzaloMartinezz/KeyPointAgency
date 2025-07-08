// src/components/ContactUs/ContactUs.js
import React from 'react';
import '../Styles/ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us-section" id="contacto">
      <h2>Contactanos</h2>
      <p className="section-description">¿Tenés preguntas? ¡Estaremos encantados de ayudarte!</p>
      <div className="contact-form-container">
        <form className="contact-form">
          <input type="text" placeholder="Tu Nombre" className="form-input" required />
          <input type="email" placeholder="Tu Email" className="form-input" required />
          <input type="text" placeholder="Teléfono (Opcional)" className="form-input" />
          <textarea placeholder="Tu Mensaje" rows="5" className="form-textarea" required></textarea>
          <button type="submit" className="btn btn-primary contact-submit-btn">Enviar Mensaje</button>
        </form>
        <div className="contact-info">
          <h3>Nuestra Oficina</h3>
          <p>Dirección: Calle Falsa 123, Ciudad, País</p>
          <p>Teléfono: +11 5555-5555</p>
          <p>Email: info@inmoapp.com</p>
          <div className="social-links">
            {/* Íconos de redes sociales aquí */}
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;