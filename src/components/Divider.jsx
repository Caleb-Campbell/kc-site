import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Divider({ text, button, path }) {
  return (
    <div className="fonted text-center quote mx-auto">
      <h2 className="mb-2">{text}</h2>
      {button && (
        <NavLink className="fonted contact-button mt-3" to={path}>
          {button}
        </NavLink>
      )}
    </div>
  );
}
