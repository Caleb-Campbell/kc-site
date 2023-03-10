import React from "react";
import TopNav from "../components/TopNav";
import { Container, Row, Col, Stack } from "react-bootstrap";
import family from "../assets/HatchFamily.jpg";
import SocialPhotos from "../components/SocialPhotos";

export default function About() {
  return (
    <>
      <div className="about-wrap">
        <div className="about-splash">
          <TopNav />
        </div>
      </div>
      <Container className="margin-top">
        <Row>
          <Col className="d-flex align-items-center p-0 m-0" lg={6} sm={12}>
            <Stack className="d-flex justify-content-center">
              <h3 className="fonted-lower text-center about-title">
                Kristen Hatch
              </h3>
              <p className="metal text-center fs-5 ">Professional Showrunner</p>

              <p className="text-center metal mx-auto w-50 fs-5">
                {" "}
                A1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam tempora ratione iure fuga illo eum, aut quos natus a
                tempore numquam officia rem optio odit fugit ab modi doloremque
                architecto. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Facilis dolorum odio nobis, ullam non in ex cumque quasi
                iste dignissimos culpa sunt minima natus numquam voluptates
                velit voluptas, officia autem!
              </p>
            </Stack>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center p-0 m-0"
            lg={6}
            sm={12}
          >
            <img
              className="mx-auto text-center w-75"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.minutemediacdn.com%2Fimage%2Fupload%2Fc_fit%2Cf_auto%2Cfl_lossy%2Cq_auto%2Cw_728%2Fv1563168679%2Fshape%2Fmentalfloss%2F587571-gettyimages-1139462208.jpg%3Fitok%3DAt8xe56C&f=1&nofb=1&ipt=ece5a94e892296b90da8388b0aa84169f34c07d8eeceffc64e7248926d19d730&ipo=images"
            />
          </Col>
        </Row>
      </Container>
      <div className="spacer" />
      <div className="spacer" />
      <div className="spacer" />
      <Container className="bg-light"></Container>
      <SocialPhotos bordered />
    </>
  );
}
