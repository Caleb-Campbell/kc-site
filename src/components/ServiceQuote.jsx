import React from "react";
import { Stack } from "react-bootstrap";

export default function ServiceQuote({ title, text }) {
  return (
    <>
      <Stack className="service-quote-stack mx-auto">
        {title && (
          <h4 className="fonted text-center service-quote-title mx-auto">
            {title}
          </h4>
        )}
        {text && (
          <p className="metal fs-3 w-75 text-center mx-auto my-4 mb-5">
            {text}
          </p>
        )}
      </Stack>
    </>
  );
}
