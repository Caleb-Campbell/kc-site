import React from "react";
import ServiceQuote from "../components/ServiceQuote";
import ShortGallery from "../components/ShortGallery";
import SocialPhotos from "../components/SocialPhotos";
import TopNav from "../components/TopNav";
export default function Portfolio() {
  const weddingsText = `Weddings are one of the most significant events in a couple's life as
  it marks the beginning of their journey together as partners. It is a
  celebration of love, commitment, and the bond shared between two
  people. Weddings bring families and friends together, making it an
  occasion to cherish and remember forever. Consequently, it is
  essential to ensure that every aspect of the wedding goes smoothly and
  is executed to perfection. This is where a professional wedding
  planner, like Kristen Hatch, comes into the picture. A skilled and
  experienced wedding planner will take care of everything, from
  decorations to transportation and food, ensuring that the wedding
  ceremony and reception run smoothly. Hiring a professional wedding
  planner like Kristen Hatch can prove to be beneficial in many ways.
  Firstly, it saves the bride and groom time and energy, which can be
  tedious and stressful. Secondly, a wedding planner has vast knowledge,
  experience, and resources to ensure that every aspect of the wedding
  is taken care of. Lastly, a wedding planner can ensure that everything
  fits within your budget, giving you the best possible service, with
  the most value for your money. In conclusion, weddings are significant
  events that require careful planning and execution to ensure that
  everything goes perfectly. With Kristen Hatch's services, you can rest
  assured that every aspect of your wedding, from the smallest detail to
  the grandest plan, will be taken care of with the utmost
  professionalism and expertise.`;

  const weddingPhotos = [
    "https://i.ibb.co/KLphtgj/IMG-7387.jpg",
    "https://i.ibb.co/4WmC15Z/IMG-7386.jpg",
    "https://i.ibb.co/Rzrd9cJ/IMG-7385.jpg",
    "https://i.ibb.co/28jB1hz/IMG-7380.jpg",
    "https://i.ibb.co/dkWzS8N/IMG-7378.jpg",
    "https://i.ibb.co/sWq9MhY/IMG-7379.jpg",
    "https://i.ibb.co/SfD6p4G/IMG-7377.jpg",
    "https://i.ibb.co/FmwLfhm/IMG-7374.jpg",
  ];

  return (
    <>
      <div className="weddings-wrap">
        <div className="about-splash">
          <TopNav />
        </div>

        <div className="wedding-splash d-flex align-items-center justify-content-center fonted text-light">
          <h3 className="text-center fs-1">Weddings</h3>
        </div>
      </div>
      <div className="spacer" />
      <ServiceQuote text={weddingsText} title={"What to Expect"} />
      <div className="spacer " />
      <div className="spacer " />
      <div className="">
        <ServiceQuote title={"weddings at a glance"} />
      </div>
      <ShortGallery photos={weddingPhotos} alt="wedding photos" />
      <div className="spacer" />
      <SocialPhotos bordered />
    </>
  );
}
