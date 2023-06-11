import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar
          expand={expand}
          style={{
            backgroundColor: '#e6ffee',
            width: '100%',
          }}
          fixed="top"
        >
          <Container>
            <Navbar.Brand style={{ color: '#00330f' }} href="#">
              Monkeypox Master
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 "
                  style={{ gap: 28 }}
                >
                  <Link
                    style={{ textDecoration: 'none', color: '#00330f' }}
                    to="/"
                  >
                    Home
                  </Link>
                  <a
                    style={{ textDecoration: 'none', color: '#00330f' }}
                    href="#prevention"
                  >
                    Prevention
                  </a>
                  <Link
                    style={{ textDecoration: 'none', color: '#00330f' }}
                    to="/symptoms"
                  >
                    Symptoms
                  </Link>
                  <Link
                    style={{ textDecoration: 'none', color: '#00330f' }}
                    to="/predict"
                  >
                    Predict
                  </Link>
                  <Link
                    style={{ textDecoration: 'none', color: '#00330f' }}
                    to="/treatment"
                  >
                    Treatment
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
