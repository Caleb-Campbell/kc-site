import React from "react";
import { Container, Stack, Col, Row } from "react-bootstrap";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="text-center foot">
      <Container className="">
        <Row>
          <Col xs={12} lg={3}>
            <Stack>
              <a href="tel:+1-509-554-1793" className="metal">
                {"("}509{")"} 554-1793
              </a>
              <a className="metal">kristen@gmail.com</a>
            </Stack>
          </Col>
          <Col xs={12} lg={6}>
            <img className="w-25" src={logo} />
          </Col>
          <Col xs={12} lg={3}>
            <Stack>
              <a className="metal">Instagram</a>
              <a className="metal">Facebook</a>
            </Stack>
          </Col>
        </Row>
        <Row xs={12}>
          <Col xs={12}>
            <p className="metal">
              Copyright © 2023 — Kristens Creations, All Rights Reserved
            </p>
          </Col>
          <Col xs={12}>
            <p className="text-end metal">
              Website by{" "}
              <a
                className="metal"
                href="https://www.linkedin.com/in/calebcampbell-/"
              >
                Caleb Campbell
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
