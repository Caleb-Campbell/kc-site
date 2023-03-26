import React from "react";
import TopNav from "../components/TopNav";
import ServiceQuote from "../components/ServiceQuote";
import SocialPhotos from "../components/SocialPhotos";
import Services from "../components/Services";

export default function Arrangements() {
  return (
    <>
      <div className="weddings-wrap">
        <div className="about-splash">
          <TopNav />
        </div>

        <div className="arrangements-splash d-flex align-items-center justify-content-center fonted text-light">
          <h3 className="text-center fs-1">arrangements</h3>
        </div>
      </div>
      <div className="spacer" />
      <Services
        img1={
          "https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOSmuxnznsmHVSBCyvvH1oMAXqLs5FHGyKLJ69-a7mc9gEaCNmt3uZM_OjAKxRclo4pFCycWmzv2GtTl714pH1kBYmYl1w=w1718-h1287"
        }
        img2={"https://i.ibb.co/KLphtgj/IMG-7387.jpg"}
        img3={
          "https://images.pexels.com/photos/4684169/pexels-photo-4684169.jpeg"
        }
      />
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
