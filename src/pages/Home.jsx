import React from "react";
import Services from "../components/Services";
import TopNav from "../components/TopNav";
import Divider from "../components/Divider";
import SocialPhotos from "../components/SocialPhotos";
import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className="splash">
        <TopNav />
      </div>
      <Divider
        text={"Dedicated to making your event beautiful and unforgettable"}
      />
      <Services />
      <Stack className="fonted text-center quote mx-auto">
        <h2 className="mb-2 fs-3">Let's get this party started...</h2>
        <NavLink className="fonted contact-button mt-3 mx-auto" to={"/contact"}>
          Contact Me
        </NavLink>
        <SocialPhotos />
      </Stack>
    </>
  );
}
