import React from "react";
import { Link } from "react-router-dom";
const cdiv = { "margin-top": "70px" };
const j = {
  position: "relative",
  bottom: "7px",
  cursor: "pointer",
  "text-decoration": "none",
  color: "black",
  "font-weight": "bold",
};
export default function About() {
  return (
    <div className="fdiv">
      <div className="cdiv" style={cdiv}>
        <h1>About Todo App</h1>
        <p className="warning justify">
          Hey guys <br />
          pardon my english:)
          <br />
          <br />
          This is a simple Todo app developed using react, i just developed This
          Todo app for learn react and how to use the component based web
          library's. in this tiny Todo app i added two lists they are actually
          not two lists, one is class component based list and other is function
          component based list :p but you can use it as two lists lol!!!
          <br />
          <br />
          In this app i added basic functionalitys like add edit delete and
          check and i developed it as a prograssive web app so you can use even
          in offline and it uses browser local storage as database so dont
          remember to clear storage!!!
        </p>
        <Link style={j} to="/">
          Home &nbsp;&nbsp;<i class="fas fa-arrow-left"></i>
        </Link>
      </div>
    </div>
  );
}
