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
        <h3 className="precio-producto">{product.price}</h3>
      </div>
        <p className="descripcion-producto">{product.description}</p>
    </article>
  );
};

export default ProductCard;
