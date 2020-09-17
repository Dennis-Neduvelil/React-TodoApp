import React, { Component } from "react";
import "./todoapp.css";

class Todoclass extends Component {
  state = {
    textInput: "",
    textArray: [],
    btncng: "fas fa-plus kp",
    btn: "add",
    keyref: "",
    warning: "",
    status: "todo app using class component",
  };
  //Lifecycles
  componentDidMount() {
    this.getTodo();
  }
  componentDidUpdate() {
    this.saveTodo();
  }

  //Functions
  timer = () => {
    setTimeout(() => {
      this.setState({ status: "todo app using class component", warning: "" });
    }, 2000);
  };

  btnHandler = (btn) => () => {
    const { textInput } = this.state;
    if (btn === "add") {
      if (textInput === "") {
        this.setState({
          warning: "warning",
          status: "*Enter something to Add",
        });
        this.timer();
      } else {
        this.addItem();
        this.setState({ textInput: "" });
      }
    } else if (btn === "update") {
      if (textInput === "") {
        this.setState({
          warning: "warning",
          status: "*Enter something to Update",
        });
        this.timer();
      } else {
        this.updateItem();
        this.setState({ textInput: "" });
        this.setState({ btn: "add", btncng: "fas fa-plus kp" });
      }
    }
  };

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  addItem = () => {
    const { textArray, textInput } = this.state;
    this.setState({ textArray: [...textArray, { val: textInput, cr: "" }] });
  };

  deleteItem = (key) => () => {
    const { textArray } = this.state;
    this.setState({
      warning: "warning",
      status: "*" + textArray[key].val + " deleted ",
      textArray: textArray.filter((item, index) => index !== key),
      btn: "add",
      btncng: "fas fa-plus kp",
      textInput: "",
    });
    this.timer();
  };

  updateItem = () => {
    const { textArray, textInput, keyref } = this.state;

    var tempAarray = textArray;
    textArray[keyref].val = textInput;
    this.setState({
      warning: "warning",
      status: "*Updated to " + textArray[keyref].val,
      textArray: tempAarray,
    });
    this.timer();
  };

  crossItem = (key) => () => {
    const { textArray } = this.state;
    let tempAarray = textArray;
    tempAarray.map((data, index) => {
      if (key === index) {
        if (tempAarray[key].cr === "") {
          tempAarray[key].cr = "cross";

          this.setState({ textArray: tempAarray });
        } else {
          tempAarray[key].cr = "";

          this.setState({ textArray: tempAarray });
        }
      }

      return textArray;
    });
  };

  updateHandler = (key) => () => {
    const { textArray } = this.state;

    this.setState({
      textInput: textArray[key].val,
      btncng: "fas fa-check kp",
      btn: "update",
      keyref: key,
    });
  };

  enterkey = (e) => {
    e.preventDefault();
  };

  //localstorage
  saveTodo = () => {
    localStorage.setItem("todo", JSON.stringify(this.state.textArray));
  };

  getTodo = () => {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      const todos = JSON.parse(localStorage.getItem("todo"));
      this.setState({ textArray: todos });
    }
  };

  //Render
  render() {
    const { textArray, textInput, btncng, btn, warning, status } = this.state;
    return (
      <div>
        <div className="fdiv">
          <div className="cdiv">
            <h1>Todo App</h1>

            <p className={warning}>{status}</p>
            <form action="" onSubmit={this.enterkey}>
              <input
                name="textInput"
                value={textInput}
                onChange={this.inputHandler}
                type="text"
              />
              <i
                onClick={this.btnHandler(btn)}
                className={btncng}
                name={btn}
              ></i>
            </form>

            <div className="listdiv">
              <ul>
                {textArray.map((data, key) => {
                  return (
                    <li key={key} className={data.cr}>
                      {data.val}
                      <i
                        onClick={this.deleteItem(key)}
                        className="fas fa-trash-alt"
                      ></i>
                      <i
                        onClick={this.updateHandler(key)}
                        className="fas fa-pen"
                      ></i>
                      <i
                        onClick={this.crossItem(key)}
                        className="fas fa-clipboard-check"
                      ></i>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todoclass;
