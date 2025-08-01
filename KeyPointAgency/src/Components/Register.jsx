import React, { useState } from 'react';
import '../Styles/Register.css'; 

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Datos de registro:', { firstName, lastName, email, phone });
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    alert('¡Registro exitoso!');
    // Limpiar el formulario después del envío
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Crear una cuenta</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-button">Registrarme</button>
        </form>
      </div>
    </div>
  );
};

export default Register;