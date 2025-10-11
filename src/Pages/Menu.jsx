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
import Header from '../Components/Header';
import ProductCard from '../Components/ProductCard';
import './Menu.css';

const Menu = () => {
  /**
   * Estado para controlar qué sección mostrar
   * 'all' - muestra todas las secciones
   * 'bebidas' - muestra solo bebidas
   * 'comida' - muestra solo comida
   */
  const [activeSection, setActiveSection] = useState('all');

  /**
   * useEffect - Manejo de Navegación por Anclas y Filtrado
   * 
   * Este efecto maneja el scroll automático a las secciones específicas
   * cuando se navega desde el header usando anclas (#bebidas, #comida).
   * También controla el filtrado de secciones según el hash de la URL.
   * 
   * @function handleScrollToSection
   * @description Función que detecta el hash en la URL y hace scroll suave a la sección correspondiente
   * 
   * Funcionalidades:
   * - Detecta anclas en la URL (window.location.hash)
   * - Establece la sección activa según el hash
   * - Busca el elemento correspondiente en el DOM
   * - Realiza scroll suave con scrollIntoView
   * - Incluye delay de 100ms para mejor experiencia
   * - Escucha cambios de hash para navegación dinámica
   * 
   * @listens hashchange - Evento que se dispara cuando cambia el hash de la URL
   * @cleanup removeEventListener - Limpia el event listener al desmontar el componente
   */
  useEffect(() => {
    /**
     * Función para manejar el scroll automático y filtrado de secciones
     * @returns {void}
     */
    const handleScrollToSection = () => {
      // Obtener el hash de la URL actual
      const hash = window.location.hash;
      
      if (hash) {
        // Extraer el nombre de la sección del hash (sin el #)
        const sectionName = hash.substring(1);
        
        // Establecer la sección activa según el hash
        if (sectionName === 'bebidas' || sectionName === 'comida') {
          setActiveSection(sectionName);
        } else {
          setActiveSection('all');
        }
        
        // Buscar el elemento correspondiente en el DOM
        const element = document.querySelector(hash);
        
        if (element) {
          // Delay para asegurar que el componente esté completamente renderizado
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',  // Scroll suave
              block: 'start'       // Alineación al inicio del elemento
            });
          }, 100);
        }
      } else {
        // Si no hay hash, mostrar todas las secciones
        setActiveSection('all');
      }
    };

    // Ejecutar scroll automático al montar el componente
    handleScrollToSection();

    // Escuchar cambios en el hash para navegación dinámica
    window.addEventListener('hashchange', handleScrollToSection);

    // Cleanup: remover event listener al desmontar el componente
    return () => {
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, []); // Array de dependencias vacío para ejecutar solo al montar

  /**
   * Datos de bebidas disponibles en el menú
   * Cada bebida contiene: id, name, description, price, image
   */
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
      
      {/* Botón de regreso - Solo visible cuando se está en una sección filtrada */}
      {activeSection !== 'all' && (
        <div className="back-button-container">
          <button 
            className="back-button"
            onClick={() => {
              setActiveSection('all');
              window.history.pushState(null, '', '/menu');
            }}
          >
            ← Ver Todo el Menú
          </button>
        </div>
      )}
      
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
          <h2 className="titulo-contenido">Comida</h2>
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
