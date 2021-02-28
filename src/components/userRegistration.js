import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function User() {
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
      <div className="">
        <div className="">
          <h1>GET STARTED</h1>
          <p className={warning}>{status}</p>
          <input
            onChange={inputHandler}
            name={uname}
            value={uname}
            
            type="text"
            placeholder="Enter your name"
          />
          <h3 onClick={btnHndl} >
            Next &nbsp;&nbsp;<i class="fas fa-chevron-right "></i>
          </h3>
          <Link to="/about">
            About &nbsp;&nbsp;<i class="fas fa-info-circle"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
