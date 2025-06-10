const Footer = () => {
  return (
    <footer className="text-center py-3 border-top bg-light mt-auto">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} My Ecom. All rights reserved.</p>
        <div className="d-flex justify-content-center mt-2">
          <a href="/about" className="nav-link px-2 text-muted">About Us</a>
          <span className="px-2 text-muted">|</span>
          <a href="/contact" className="nav-link px-2 text-muted">Contact</a>
          <span className="px-2 text-muted">|</span>
          <a href="/privacy" className="nav-link px-2 text-muted">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
