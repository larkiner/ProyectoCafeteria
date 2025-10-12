/**
 * Componente Home - Página Principal de Crazy Coffee
 * 
 * Este componente representa la página de inicio estática de la cafetería,
 * mostrando información sobre los servicios y características del establecimiento.
 * 
 * @component
 * @returns {JSX.Element} Componente de la página principal
 * 
 * @description
 * La página Home incluye:
 * - Header de navegación
 * - Sección hero con mensaje de bienvenida
 * - Sección de características (Coworking, Juegos, Talleres)
 * - Sección de promociones
 * 
 * @example
 * <Home />
 */

import React from 'react';
import { Link } from 'react-router-dom'; // Importación para navegación con React Router
import Header from '../Components/Header';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Componente de navegación principal */}
      <Header />
      
      {/* Contenido principal de la página de inicio */}
      <main className="home">
        {/* Sección hero con mensaje de bienvenida y call-to-action */}
        <section className="hero">
          <h1>Bienvenido a Crazy Coffee ☕</h1>
          <p>Tu espacio para crear, conectar y disfrutar.</p>

        </section>

        {/* Sección de características y servicios del establecimiento */}
        <section className="features">
          <div className="feature">
            <h2>Zona Coworking</h2>
            <p>Ambiente relajado para trabajar o estudiar con buena música.</p>
          </div>
          <div className="feature">
            <h2>Área de Juegos</h2>
            <p>Desconéctate un rato y diviértete con amigos.</p>
          </div>
          <div className="feature">
            <h2>Talleres Creativos</h2>
            <p>Eventos para inspirarte y compartir ideas.</p>
          </div>
        </section>

        {/* Sección de promociones y eventos especiales */}
        <section className="promo">
          <h2>Promociones Especiales</h2>
          <p>¡Descubre nuestras ofertas semanales y eventos únicos!</p>
        </section>
      </main>
    </div>
  );
};

export default Home;