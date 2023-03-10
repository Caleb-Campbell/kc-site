import React from "react";
import SocialPhotos from "../components/SocialPhotos";
import TopNav from "../components/TopNav";
export default function Portfolio() {
  return (
    <>
      <div className="weddings-wrap">
        <div className="wedding-splash">
          <TopNav />
        </div>
      </div>
      <div className="spacer" />
      <SocialPhotos bordered />
    </>
  );
}
