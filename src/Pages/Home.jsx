import React from 'react';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import './Home.css';

const Home = () => {
  // Datos de bebidas
  const bebidas = [
    {
      id: 1,
      name: "Americano",
      description: "Un café suave y aromático, preparado con espresso y agua caliente. Ideal para quienes buscan una experiencia clásica con cuerpo ligero y sabor equilibrado.",
      price: "5000$",
      image: "/Cafeamericano.jpeg"
    },
    {
      id: 2,
      name: "Espreso",
      description: "Intenso y concentrado, el espreso es la base de todo buen café. Servido en una porción pequeña, ofrece un sabor profundo y un golpe de energía instantáneo.",
      price: "5000$",
      image: "/expreso.jpeg"
    },
    {
      id: 3,
      name: "Capuchino",
      description: "Una deliciosa combinación de espresso, leche vaporizada y espuma cremosa. Su textura sedosa y su sabor equilibrado lo hacen perfecto para cualquier momento del día.",
      price: "5000$",
      image: "/Capuchino.jpeg"
    },
    {
      id: 4,
      name: "Latte",
      description: "Cálido y reconfortante, el latte mezcla espresso con abundante leche vaporizada. Su suavidad lo convierte en la elección ideal para quienes prefieren un café más ligero y personalizable.",
      price: "5000$",
      image: "/Latte.jpeg"
    }
  ];

  // Datos de comida
  const comida = [
    {
      id: 5,
      name: "Croissant",
      description: "Un café suave y aromático, preparado con espresso y agua caliente. Ideal para quienes buscan una experiencia clásica con cuerpo ligero y sabor equilibrado.",
      price: "5000$",
      image: "/croissant.jpg"
    },
    {
      id: 6,
      name: "Muffin",
      description: "Intenso y concentrado, el espreso es la base de todo buen café. Servido en una porción pequeña, ofrece un sabor profundo y un golpe de energía instantáneo.",
      price: "5000$",
      image: "/muffin.jpg"
    },
    {
      id: 7,
      name: "Brownie de chocolate",
      description: "Una deliciosa combinación de espresso, leche vaporizada y espuma cremosa. Su textura sedosa y su sabor equilibrado lo hacen perfecto para cualquier momento del día.",
      price: "5000$",
      image: "/brownie.jpg"
    },
    {
      id: 8,
      name: "Sándwich de jamón y queso",
      description: "Cálido y reconfortante, el latte mezcla espresso con abundante leche vaporizada. Su suavidad lo convierte en la elección ideal para quienes prefieren un café más ligero y personalizable.",
      price: "5000$",
      image: "/sandwich.jpg"
    }
  ];

  return (
    <div className="home-container">
      <Header />
      
      {/* Sección de bebidas */}
      <section className="Contenido" id="bebidas">
        <h2 className="titulo-contenido">Bebidas</h2>
        <section className="cards">
          {bebidas.map(bebida => (
            <ProductCard key={bebida.id} product={bebida} />
          ))}
        </section>
      </section>

      {/* Sección de comida */}
      <section className="Contenido" id="comida">
        <h2 className="titulo-contenido">Comida</h2>
        <section className="cards">
          {comida.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default Home;
