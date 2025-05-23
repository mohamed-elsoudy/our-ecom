import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="shadow-sm" 
      style={{ 
        background: 'linear-gradient(90deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        padding: '0.75rem 1rem'
      }}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bold" 
          style={{ color: 'white', fontSize: '1.5rem' }}
        >
          Our Ecom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="mx-2" 
              style={{ color: 'white', fontWeight: '500' }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/products" 
              className="mx-2" 
              style={{ color: 'white', fontWeight: '500' }}
            >
              Products
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/cart" 
              className="mx-2" 
              style={{ color: 'white', fontWeight: '500' }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Button 
            variant="light" 
            size="sm" 
            className="ms-3 rounded-pill px-3"
            style={{ fontWeight: '600' }}
          >
            Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;