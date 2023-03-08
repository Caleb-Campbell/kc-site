import React from "react";
import Services from "../components/Services";
import TopNav from "../components/TopNav";
export default function Home() {
  return (
    <>
      <div className="splash">
        <TopNav />
      </div>
      <div className="fonted text-center quote mx-auto">
        <h2>Dedicated to making your event beautiful and unforgettable</h2>
      </div>
      <Services />
    </>
  );
}
