import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 99.99,
      image: '/placeholder.jpg',
      category: 'electronics'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      image: '/placeholder.jpg',
      category: 'fashion'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 29.99,
      image: '/placeholder.jpg',
      category: 'home-living'
    }
  ];

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
