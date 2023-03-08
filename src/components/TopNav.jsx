import { DropdownButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function TopNav() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="background-none nav border-none"
    >
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="fonted text-light title">Kristens Creations</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end mt-3">
            <Nav.Link>
              <NavLink className=" text-decoration-none fonted navlink" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <NavDropdown
              title={<span className="fonted">Services</span>}
              className="fonted navlink text-light drop"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink
                  className=" text-decoration-none fonted navlink"
                  to="/weddings"
                >
                  Weddings
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className=" text-decoration-none fonted navlink"
                  to="/parties"
                >
                  Parties
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  className=" text-decoration-none fonted navlink"
                  to="/arrangements"
                >
                  Arrangements
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <NavLink
                className=" text-decoration-none fonted navlink"
                to="/rentals"
              >
                Rentals
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className=" text-decoration-none fonted navlink"
                to="/about"
              >
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className=" text-decoration-none fonted navlink"
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
