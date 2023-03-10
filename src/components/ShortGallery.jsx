import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function ShortGallery({ photos, alt }) {
  return (
    <>
      <Container>
        <Row>
          {photos.map((photo, index) => {
            return (
              <Col key={index}>
                <img src={photo} alt={alt} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
