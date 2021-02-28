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
      setstatus("*Please Enter Your Name");
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
    <div className="container section-margin user-registration">
      <div className="row">
        <h1>GET STARTED</h1>
        <p className={warning}>{status}</p>
      </div>
        <div className="row">
          <div class="input-group mb-3">
            <input
              type="text"
              class="todo-input"
              placeholder="Enter Your Name :"
            />
            </div>
            </div>
            <div className="row mb-3">
            <button type="submit" id="button-addon2">
              Next
            </button>
        </div>
      <div className="row">
        <Link to="/about">
          About &nbsp;&nbsp;<i class="fas fa-info-circle"></i>
        </Link>
      </div>
    </div>
  );
}
