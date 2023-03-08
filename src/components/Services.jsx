import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Services() {
  return (
    <>
      <h3 className="fonted text-center mb-5">Services</h3>
      <Container className="cont-serv ">
        <Row className="justify-content-between">
          <Col
            sm={12}
            lg={3}
            className="s-1 serv d-flex align-items-center text-center justify-content-center"
          >
            <NavLink className="fonted text-center text-decoration-none fs-4 serv-a">
              Weddings
            </NavLink>
          </Col>
          <Col
            sm={12}
            lg={3}
            className="s-2 serv d-flex align-items-center text-center justify-content-center"
          >
            <NavLink className="fonted text-center text-decoration-none fs-4 serv-a">
              Parties
            </NavLink>
          </Col>
          <Col
            sm={12}
            lg={3}
            className="s-3 serv d-flex align-items-center text-center justify-content-center"
          >
            <NavLink className="fonted text-center text-decoration-none fs-4 serv-a">
              Arrangements
            </NavLink>
          </Col>
        </Row>
      </Container>
      <div className="spacer" />
    </>
  );
}
