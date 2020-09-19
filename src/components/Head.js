import React from "react";
import "./Head.css";
import { NavLink } from "react-router-dom";

export default function Head() {
  const activeStyle = { color: "black" };
  return (
    <div>
      <div className="headdiv">
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/class" activeStyle={activeStyle}>
          Class
        </NavLink>
        <NavLink to="/function" activeStyle={activeStyle}>
          Function
        </NavLink>
      </div>
    </div>
  );
}
