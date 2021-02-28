import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Menu(props) {
  //styles
  const cdiv = { "margin-top": "70px" };
  const i = { "margin-top": "70px" };
  const j = {
    position: "relative",
    bottom: "-68px",
    cursor: "pointer",
    "text-decoration": "none",
    color: "black",
    "font-weight": "bold",
  };
  const h2 = { margin: "5px" };
  //states
  const [dname, setDname] = useState("");
  //hooks
  const history = useHistory();
  //localstorage
  const getTodo = () => {
    let dname = JSON.parse(localStorage.getItem("user"));
    setDname(dname);
  };
  //useEffect

  useEffect(() => {
    getTodo();
  }, []);
  //functions
  const todoList = () => {
    history.push("/class");
  };
  const todoClear = () => {
    localStorage.clear();
    history.push("/");
  };

  //render
  return (
    <div>
      <div className="fdiv" style={cdiv}>
        <div className="cdiv">
          <h1>
            Tu Tu Do...ToDo...
          </h1>
          <p>welcome to Todo App </p>
          <h2 style={h2}>Hey, {dname} Welcome to TodoApp</h2>
          <h3 onClick={todoList} style={i}>
            Todos &nbsp;&nbsp;<i class="fas fa-list-ul "></i>
          </h3>
          <h3 onClick={todoClear}>
            Clear &nbsp;&nbsp;<i class="fas fa-broom "></i>
          </h3>
          <Link to="/about" style={j}>
            About &nbsp;&nbsp;<i class="fas fa-info-circle"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
