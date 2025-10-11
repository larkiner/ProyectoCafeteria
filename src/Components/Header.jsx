import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="Encabezado">
      <main>
        <div className="Contenedor-principal">
          <div className="logo">
            <img src="/logo.png" alt="Logo de Crazzy Coffee" />
          </div>
          
          <a className="bebidas" href="#bebidas">Bebidas</a>
          <a className="comida" href="#comida">Comida</a>
        </div>
      </main>
      
      <main className="menu">
        <div className="Contenedor-secundario">
          <Link to="/register">
            <button id="registro">Registrate</button>
          </Link>
          <Link to="/login">
            <button id="login">Iniciar sesión</button>
          </Link>
        </div>
      </main>
    </header>
  );
};

export default Header;
