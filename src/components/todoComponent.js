import React from "react";
import "./todoapp.css";

export default function todoComponent(props) {
  return (
    <div className="fdiv">
      <div className="cdiv">
        <h1>Todo App</h1>
        <p className={props.warning}>{props.status}</p>
        <form action="" onSubmit={props.enterkey}>
          <input
            name="textInput"
            type="text"
            value={props.textInput}
            onChange={props.inputHandler}
          />
          <i
            onClick={props.btnHandler(props.btn)}
            className={props.btncng}
            name={props.btn}
          ></i>
        </form>

        <div className="listdiv">
          <ul>
            {props.textArray.map((data, key) => {
              return (
                <li key={key} className={data.cr}>
                  {data.val}
                  <div className="testdiv2">
                    <i
                      onClick={props.deleteItem(key)}
                      className="fas fa-trash-alt"
                    ></i>
                    <i
                      onClick={props.updateHandler(key)}
                      className="fas fa-pen"
                    ></i>
                    <i
                      onClick={props.crossItem(key)}
                      className="fas fa-clipboard-check"
                    ></i>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
