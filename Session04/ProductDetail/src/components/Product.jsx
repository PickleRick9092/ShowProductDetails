import React from 'react';

const Product = ({ product, onProductClick }) => {
  return (
    <div onClick={() => onProductClick(product)}>
      <h3>{product.name}</h3>
      <p>قیمت: {product.price}</p>
      {/* موارد دیگر مورد نیاز */}
    </div>
  );
};

export default Product;
