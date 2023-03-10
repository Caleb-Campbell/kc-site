import React from "react";
import { Col, Container } from "react-bootstrap";

export default function ShortGallery([photos]) {
  return (
    <>
      <Container>
        <Row>
          {photos.map((photo, index) => {
            return (
              <Col key={index}>
                <img src={photo} alt="wedding photo" />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
