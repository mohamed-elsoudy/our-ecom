const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our E-Commerce Store</h1>
      <div className="home-content">
        <div className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-grid">
            {/* Add featured products here */}
          </div>
        </div>
        <div className="categories-preview">
          <h2>Shop by Category</h2>
          <div className="category-grid">
            {/* Add category links here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
