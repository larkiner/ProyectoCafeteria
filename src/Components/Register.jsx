import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para guardar el registro
    console.log('Datos del registro:', formData);
    alert('Registro exitoso!');
    navigate('/');
  };

  return (
    <div className="register-container">
      {/* Encabezado con logo y frase de la empresa */}
      <header className="Encabezado-registro">
        <div className="Contenedor">
          <img src="/logo.png" alt="Logo" />
        </div>
        <h1 className="Frase-encabezado">Donde el café cobra sentido</h1>
      </header>

      {/* Formulario de registro */}
      <form className="Registro" onSubmit={handleSubmit}>
        <h2 className="titulo-Registro">Registro</h2>
        
        <div className="Contenedor-nombre-apellido">
          <div className="Contenedor-input">
            <input 
              required 
              id="nombre" 
              name="nombre"
              type="text" 
              autoComplete="off" 
              className="input-nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            <label className="user-label">NOMBRE</label>
          </div>

          <div className="Contenedor-input">
            <input 
              required 
              id="apellido" 
              name="apellido"
              type="text" 
              autoComplete="off" 
              className="input-apellido"
              value={formData.apellido}
              onChange={handleInputChange}
            />
            <label className="user-label">APELLIDO</label>
          </div>
        </div>

        <div className="input-group">
          <input 
            required 
            id="email" 
            name="email"
            type="email" 
            autoComplete="off" 
            className="input"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label className="user-label">EMAIL</label>
        </div>

        <div className="input-group">
          <input 
            required 
            id="username" 
            name="username"
            type="text" 
            autoComplete="off" 
            className="input"
            value={formData.username}
            onChange={handleInputChange}
          />
          <label className="user-label">USUARIO</label>
        </div>

        <div className="input-group">
          <input 
            required 
            id="password" 
            name="password"
            type="password" 
            autoComplete="off" 
            className="input"
            value={formData.password}
            onChange={handleInputChange}
          />
          <label className="user-label">CONTRASEÑA</label>
        </div>

        <div className="Contenedor-botones">
          <button type="submit">GUARDAR</button>
          <button type="button" onClick={() => navigate('/')}>VOLVER</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
