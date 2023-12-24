import React from 'react';

const ProductDetails = ({ selectedProduct }) => {
  return (
    <div className='ProductDetail'>
      <h2>جزئیات محصول</h2>
      {selectedProduct ? (
        <div>
          <p>نام: {selectedProduct.name}</p>
          <img src={selectedProduct.img} alt="" />
          <p>قیمت: {selectedProduct.price}</p>
          <p>توضیحات: {selectedProduct.description}</p>
        </div>
      ) : (
        <p>لطفاً یک محصول را انتخاب کنید.</p>
      )}
    </div>
  );
};

export default ProductDetails;

