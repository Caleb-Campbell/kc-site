import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-light">
      <Container className="py-3">
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start">
            <h5 className="metal fs-4">Kristens Creations LLC</h5>
          </Col>
          <Col md={4} className="text-center">
            <img src={logo} alt="Company Logo" height="300" />
          </Col>
          <Col md={4} className="text-center text-md-end">
            <a href="mailto:info@company.com" className="me-3">
              info@company.com
            </a>
            <a href="tel:+1234567890">(123) 456-7890</a>
          </Col>
        </Row>
        <Row className="mt-3 mb-2">
          <Col md={4} className="text-center text-md-start">
            <p className="metal fs-4">
              &copy; Kristens Creations {new Date().getFullYear()}
            </p>
          </Col>
          <Col md={4} className="text-center">
            <a href="#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p className="metal fs-4">Made by Caleb Campbell</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
