import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <article className="card">
      <img
        className="imagen-producto"
        src={product.image}
        alt={product.name}
      />
      <div className="info-producto">
        <h3 className="nombre-producto">{product.name}</h3>
        <p className="descripcion-producto">{product.description}</p>
      </div>
        <div className="card-footer">
          <span className="precio-producto">{product.price}</span>
          <button className="boton-agregar">+</button>
        </div>
    </article>
  );
};

export default ProductCard;
