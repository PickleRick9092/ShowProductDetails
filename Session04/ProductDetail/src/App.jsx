import './App.css'
import React, { useState } from 'react';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';


const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'محصول 1', price: 100, description: 'توضیحات محصول 1' },
    { id: 2, name: 'محصول 2', price: 150, description: 'توضیحات محصول 2' },
    { id: 3, name: 'محصول 3', price: 200, description: 'توضیحات محصول 3' },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className='Main'>
      <div >
        <h2>لیست محصولات</h2>
        {products.map((product) => (
          <Product key={product.id} product={product} onProductClick={handleProductClick} />
        ))}
      </div>
      <ProductDetails selectedProduct={selectedProduct} />
    </div>
  );
};

export default App;
