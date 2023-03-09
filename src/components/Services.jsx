import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="fonted text-center mb-5">Services</h3>
      <Container className="cont-serv ">
        <Row className="justify-content-between">
          <Col
            onClick={navigate("/weddings")}
            sm={12}
            lg={3}
            className="s-1 serv d-flex align-items-center text-center justify-content-center"
          >
            <NavLink className="fonted text-muted text-center text-decoration-none fs-4 serv-a">
              Weddings
            </NavLink>
          </Col>
          <Col
            onClick={navigate("/parties")}
            sm={12}
            lg={3}
            className="s-2 serv d-flex align-items-center text-center justify-content-center"
          >
            <NavLink className="fonted text-muted text-center text-decoration-none fs-4 serv-a">
              Parties
            </NavLink>
          </Col>
          <Col
            onClick={navigate("/arrangements")}
            sm={12}
            lg={3}
            className="s-3 serv d-flex align-items-center text-center justify-content-center"
          >
            <NavLink className="fonted text-muted text-center text-decoration-none fs-4 serv-a">
              Arrangements
            </NavLink>
          </Col>
        </Row>
      </Container>
    </>
  );
}
