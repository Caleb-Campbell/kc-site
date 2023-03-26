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
      <Services
        title
        img1={
          "https://images.unsplash.com/photo-1637616919953-5943e10bd4bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        }
        img2={
          "https://images.unsplash.com/photo-1640506054499-2b040ca19023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=531&q=80"
        }
        img3={
          "https://images.unsplash.com/photo-1608153917926-c467b4e23b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
      />
      <Stack className="fonted text-center quote mx-auto">
        <h2 className="mb-0 fs-3">lets make your dream event a reality</h2>
        <NavLink className="fonted contact-button mt-4 mx-auto" to={"/contact"}>
          Contact Me
        </NavLink>
      </Stack>
      <SocialPhotos />
    </>
  );
}
