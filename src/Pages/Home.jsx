import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <main className="home">
      <section className="hero">
        <h1>Bienvenido a Crazy Coffee ☕</h1>
        <p>Tu espacio para crear, conectar y disfrutar.</p>
        <a href="#menu" className="cta-button">Explora el Menú</a>
      </section>

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

      <section className="promo">
        <h2>Promociones Especiales</h2>
        <p>¡Descubre nuestras ofertas semanales y eventos únicos!</p>
      </section>
    </main>
    </div>
  );
};

export default Home;