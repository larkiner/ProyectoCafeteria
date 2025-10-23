/**
 * Componente Menu - Página del Menú de Productos con Filtrado
 * 
 * Este componente muestra el catálogo de productos de la cafetería con funcionalidad
 * de filtrado dinámico. Los usuarios pueden ver todas las categorías o filtrar por
 * secciones específicas (bebidas o comida) mediante navegación por anclas.
 * 
 * @component
 * @returns {JSX.Element} Componente de la página del menú con filtrado
 * 
 * @description
 * La página Menu incluye:
 * - Header de navegación con enlaces funcionales
 * - Sistema de filtrado por secciones (bebidas, comida, todas)
 * - Navegación por anclas con scroll automático
 * - Renderizado condicional de secciones
 * - Sección de bebidas con 4 productos principales
 * - Sección de comida con 4 productos principales
 * - Uso del componente ProductCard para mostrar cada producto
 * 
 * @state
 * - activeSection: Controla qué sección mostrar ('all', 'bebidas', 'comida')
 * 
 * @data
 * - bebidas: Array con datos de bebidas (Americano, Espreso, Capuchino, Latte)
 * - comida: Array con datos de comida (Croissant, Muffin, Brownie, Sándwich)
 * 
 * @navigation
 * - "/menu" - Muestra todas las secciones
 * - "/menu#bebidas" - Muestra solo la sección de bebidas
 * - "/menu#comida" - Muestra solo la sección de comida
 * 
 * @example
 * <Menu />
 */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import './Menu.css';

const Menu = () => {
  const [activeSection, setActiveSection] = useState('all');
  const location = useLocation();

  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = location.hash;
      
      if (hash) {
        const sectionName = hash.substring(1);
        
        if (sectionName === 'bebidas' || sectionName === 'comida') {
          setActiveSection(sectionName);
        } else {
          setActiveSection('all');
        }
        
        const element = document.querySelector(hash);
        
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      } else {
        setActiveSection('all');
      }
    };

    handleScrollToSection();
  }, [location.hash]); // Array de dependencias vacío para ejecutar solo al montar

  /**
   * Datos de bebidas disponibles en el menú
   * Cada bebida contiene: id, name, description, price, image
   */
  const bebidas = [
    {
      id: 1,
      img: "/Cafeamericano.jpeg",
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

  /**
   * Datos de comida disponible en el menú
   * Cada comida contiene: id, name, description, price, image
   */
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
    <div className="menu-container">
      {/* Componente de navegación principal */}
      <Header />
      
      
      {/* Sección de bebidas - Muestra solo si activeSection es 'all' o 'bebidas' */}
      {(activeSection === 'all' || activeSection === 'bebidas') && (
        <section className="Contenido" id="bebidas">
          <h2 className="titulo-contenido">Bebidas</h2>
          <section className="cards">
            {bebidas.map(bebida => (
              <ProductCard key={bebida.id} product={bebida} />
            ))}
          </section>
        </section>
      )}

      {/* Sección de comida - Muestra solo si activeSection es 'all' o 'comida' */}
      {(activeSection === 'all' || activeSection === 'comida') && (
        <section className="Contenido" id="comida">
          <h2 className="titulo-contenido">Comestibles</h2>
          <section className="cards">
            {comida.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </section>
        </section>
      )}
    </div>
  );
};

export default Menu;
