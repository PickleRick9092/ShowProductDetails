import React from 'react';

const Product = ({ product, onProductClick }) => {
  return (
    <div className='Product' onClick={() => onProductClick(product)}>
      <img src={product.img} alt="" />
      <p>{product.name}</p>
      
      
      {/* موارد دیگر مورد نیاز */}
    </div>
  );
};

export default Product;
