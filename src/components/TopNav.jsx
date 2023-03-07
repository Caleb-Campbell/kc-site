import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/weddings">Weddings</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/parties">Parties</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/arrangements">Arrangements</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <NavLink to="/about">About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/rentals">Rentals</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contact">Contact</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
