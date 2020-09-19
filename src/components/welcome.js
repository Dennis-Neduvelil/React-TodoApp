import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
export default function Welcome() {
  //styles

  const cdiv = { "margin-top": "70px" };
  const input = { width: "95%" };
  const i = { "margin-top": "100px" };
  const j = {
    position: "relative",
    bottom: "-63px",
    cursor: "pointer",
    "text-decoration": "none",
    color: "black",
    "font-weight": "bold",
  };
  //use hooks
  let history = useHistory();

  //states

  const [uname, setUname] = useState("");
  const [status, setstatus] = useState("Welcome to Todo App");
  const [warning, setwarning] = useState("");
  //functions

  const timer = () => {
    setTimeout(() => {
      setstatus("Welcome to Todo App");
      setwarning("");
    }, 2000);
  };

  const inputHandler = (event) => {
    event.target.name = setUname(event.target.value);
    console.log(uname);
  };

  const btnHndl = () => {
    if (uname === "") {
      setstatus("*Please enter your name");
      setwarning("warning");
      timer();
    } else {
      nxtBtn();
    }
  };

  const nxtBtn = () => {
    saveTodo();
    history.push("/");
  };

  //localstorage
  const saveTodo = () => {
    localStorage.setItem("user", JSON.stringify(uname));
  };

  return (
    <div>
      <div className="fdiv" style={cdiv}>
        <div className="cdiv">
          <h1>GET STARTED</h1>
          <p className={warning}>{status}</p>
          <input
            onChange={inputHandler}
            name={uname}
            value={uname}
            style={input}
            type="text"
            placeholder="Enter your name"
          />
          <h3 onClick={btnHndl} style={i}>
            Next &nbsp;&nbsp;<i class="fas fa-chevron-right "></i>
          </h3>
          <Link style={j} to="/about">
            About &nbsp;&nbsp;<i class="fas fa-info-circle"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
