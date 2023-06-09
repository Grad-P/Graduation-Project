import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
        <>
          {[ 'md' ].map((expand) => (
            <Navbar expand={expand} style={{backgroundColor:'#e6ffee', position:'fixed' ,width:'100%'}}>
              <Container>
                <Navbar.Brand style={{color:'#00330f'}} href="#">Monkeypox Master</Navbar.Brand>
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
                    <Nav className="justify-content-end flex-grow-1 " style={{gap:10 }}>
                <Link style={{ textDecoration: 'none', color:'#00330f' }} to="/">home</Link>
                <a style={{ textDecoration: 'none' ,color:'#00330f'}} href="#prevention">prevention</a>
                <Link style={{ textDecoration: 'none' ,color:'#00330f'}} to="/symptoms">symptoms</Link>
                <Link style={{ textDecoration: 'none',color:'#00330f' }} to="/predict">predict</Link>
                <Link style={{ textDecoration: 'none',color:'#00330f' }} to="/result">treatment</Link>
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
