import React from 'react';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {
  const categories = [
    { id: 1, name: 'Electronics', slug: 'electronics' },
    { id: 2, name: 'Fashion', slug: 'fashion' },
    { id: 3, name: 'Home & Living', slug: 'home-living' },
    { id: 4, name: 'Sports', slug: 'sports' },
    { id: 5, name: 'Books', slug: 'books' },
    { id: 6, name: 'Toys', slug: 'toys' },
  ];

  return (
    <div className="categories-container">
      <h1>Shop by Category</h1>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <Link to={`/categories/${category.slug}`}>
              <h3>{category.name}</h3>
              <p>Shop Now</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
