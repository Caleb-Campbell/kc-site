import React from "react";
import TopNav from "../components/TopNav";
import ServiceQuote from "../components/ServiceQuote";
import SocialPhotos from "../components/SocialPhotos";

export default function Parties() {
  return (
    <>
      <div className="weddings-wrap">
        <div className="about-splash">
          <TopNav />
        </div>

        <div className="parties-splash d-flex align-items-center justify-content-center fonted text-light">
          <h3 className="text-center fs-1">parties</h3>
        </div>
      </div>
      <div className="spacer" />
      <ServiceQuote text={"text"} title={"What to Expect"} />
      <div className="spacer " />
      <div className="spacer " />
      <div className="">
        <ServiceQuote title={"weddings at a glance"} />
      </div>
      {/* <ShortGallery photos={weddingPhotos} alt="wedding photos" /> */}
      <div className="spacer" />
      <SocialPhotos bordered />
    </>
  );
}
