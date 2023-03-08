import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  FormControl,
  FormLabel,
  Stack,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import SocialPhotos from "../components/SocialPhotos";
import TopNav from "../components/TopNav";

export default function Contact() {
  const [eventType, setEventType] = useState("event");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [box, setBox] = useState("");

  const changeEvent = (e) => {
    setEventType(e.target.value);
  };

  const changeInput = (e) => {
    if (e.target.type) {
    }
  };

  return (
    <>
      <div className="contact-splash">
        <TopNav />
      </div>
      <Form className="p-3 contact-form mx-auto">
        <h2 className="fonted text-center fs-3 my-5">Complete form below</h2>
        <Stack gap={4}>
          <FormLabel className="fonted">
            {" "}
            Name
            <FormControl type="text" id="name" className="cap-metal" />
          </FormLabel>
          <FormLabel className="fonted">
            {" "}
            Email
            <FormControl type="email" id="email" className="cap-metal" />
          </FormLabel>
          <FormLabel className="fonted">
            {" "}
            Type of Event
            <FormControl
              value={eventType}
              as="select"
              name="selectedEvent"
              className="cap-metal"
              onChange={changeEvent}
            >
              <option value="event" className="fonted">
                --select--
              </option>
              <option value="wedding" className="fonted">
                Wedding
              </option>
              <option value="party" className="fonted">
                Party
              </option>
              <option value="event" className="fonted">
                Other
              </option>
            </FormControl>
          </FormLabel>
          <FormLabel className="fonted">
            {" "}
            Please describe your {eventType}
            <FormControl className="cap-metal" as="textarea" rows={4} />
          </FormLabel>
          <Button
            type="submit"
            variant="outline-secondary"
            className="w-25 fonted mx-auto"
            style={{ fontFamily: "'Metal', cursive" }}
          >
            Submit
          </Button>
        </Stack>
      </Form>
      <div className="spacer" />
      <SocialPhotos />
    </>
  );
}
