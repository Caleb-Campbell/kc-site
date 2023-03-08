import React from "react";
import {
  Col,
  Container,
  Form,
  Row,
  FormControl,
  FormLabel,
  Stack,
} from "react-bootstrap";
import SocialPhotos from "../components/SocialPhotos";
import TopNav from "../components/TopNav";

export default function Contact() {
  return (
    <>
      <div className="contact-splash">
        <TopNav />
      </div>
      <Form className="p-3 w-50 mx-auto">
        <h2 className="fonted text-center">Contact this event</h2>
        <Stack gap={4}>
          <FormLabel>
            {" "}
            Name
            <FormControl type="text" />
          </FormLabel>
          <FormLabel>
            {" "}
            Email
            <FormControl type="email" />
          </FormLabel>
          <FormLabel>
            {" "}
            Type of Event
            <FormControl as="select">
              <option>--select--</option>
              <option>Wedding</option>
              <option>Party</option>
              <option>Other</option>
            </FormControl>
          </FormLabel>
          <FormLabel>
            {" "}
            Please describe the work you need done
            <FormControl as="textarea" rows={4} />
          </FormLabel>
        </Stack>
      </Form>
      <SocialPhotos />
    </>
  );
}
