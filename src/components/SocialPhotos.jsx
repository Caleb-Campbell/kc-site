import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SocialPhotos() {
  const photos = [
    "https://i.ibb.co/fSPrjqx/c.jpg",
    "https://i.ibb.co/qp7N6CZ/d.jpg",
    "https://i.ibb.co/RNHPjh7/e.jpg",
    "https://i.ibb.co/8Y9yVwq/f.jpg",
    "https://i.ibb.co/Hn0zx5H/h.jpg",
    "https://i.ibb.co/4pps6DC/i.jpg",
  ];

  return (
    <>
      <h3 className="fonted text-center mb-5">
        <a
          href="https://www.instagram.com/triden50/"
          target="_blank"
          className="navlink-dark metal pinky"
        >
          follow along @kristensCreations
        </a>
      </h3>
      <Container fluid="sm" className="w-100">
        <Row className="justify-content-between align-items-around row mx-auto">
          {photos.map((photo, index) => {
            return (
              <Col key={index} lg={2} xs={6} className="social-col">
                <img src={photo} className="social-photo" />
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="spacer" />
    </>
  );
}
