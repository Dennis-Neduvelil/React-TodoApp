import React, { useEffect, useState } from "react";

export default function Todo() {
  const [textInput, settextInput] = useState("");
  const [textArray, settextArray] = useState([]);
  const [btncng, setbtncng] = useState("fas fa-plus kp");
  const [keyref, setkeyref] = useState("");
  const [warning, setwarning] = useState("");
  const [btn, setbtn] = useState("add");
  const [status, setstatus] = useState("todo app using function component");

  //useEffect
  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    saveTodo();
  }, [textArray, status]);

  //functions
  const timer = () => {
    setTimeout(() => {
      setstatus("todo app using function component");
      setwarning("");
    }, 2000);
  };

  const btnHandler = (btn) => () => {
    if (btn === "add") {
      if (textInput === "") {
        setwarning("warning");
        setstatus("*Enter something to Add");
        timer();
      } else {
        addItem();
        settextInput("");
      }
    } else if (btn === "update") {
      if (textInput === "") {
        setwarning("warning");
        setstatus("*Enter something to Update");
        timer();
      } else {
        updateItem();
        settextInput("");
        setbtn("add");
        setbtncng("fas fa-plus kp");
      }
    }
  };

  const addItem = () => {
    settextArray([...textArray, { val: textInput, cr: "" }]);
  };

  const deleteItem = (key) => () => {
    setwarning("warning");
    setstatus("*" + textArray[key].val + " deleted ");
    settextArray(textArray.filter((data, index) => index !== key));
    setbtn("add");
    setbtncng("fas fa-plus kp");
    settextInput("");
    timer();
  };

  const crossItem = (key) => () => {
    let tempAarray = textArray;
    tempAarray.map((data, index) => {
      if (key === index) {
        if (tempAarray[key].cr === "") {
          tempAarray[key].cr = "cross";
          settextArray(tempAarray);
        } else {
          tempAarray[key].cr = "";
          settextArray(tempAarray);
        }
      }

      setstatus("*item checked/unchecked");
      timer();
      return textArray;
    });
  };

  const updateHandler = (key) => () => {
    settextInput(textArray[key].val);
    setbtncng("fas fa-check kp");
    setbtn("update");
    setkeyref(key);
    console.log(btncng);
    console.log(btn);
  };

  const updateItem = () => {
    var tempAarray = textArray;
    textArray[keyref].val = textInput;
    setwarning("warning");
    setstatus("*Updated to " + textArray[keyref].val);
    settextArray(tempAarray);
    timer();
  };

  const enterkey = (e) => {
    e.preventDefault();
  };
  //localstorage
  const saveTodo = () => {
    localStorage.setItem("todos", JSON.stringify(textArray));
  };
  const getTodo = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosf = JSON.parse(localStorage.getItem("todos"));
      settextArray(todosf);
    }
  };

  return (
    <div className="fdiv">
      <div className="cdiv">
        <h1>Todo App</h1>
        <p className={warning}>{status}</p>
        <form action="" onSubmit={enterkey}>
          <input
            name="textInput"
            type="text"
            value={textInput}
            onChange={(event) => settextInput(event.target.value)}
          />
          <i onClick={btnHandler(btn)} className={btncng} name={btn}></i>
        </form>

        <div className="listdiv">
          <ul>
            {textArray.map((data, key) => {
              return (
                <li key={key} className={data.cr}>
                  {data.val}
                  <i onClick={deleteItem(key)} className="fas fa-trash-alt"></i>
                  <i onClick={updateHandler(key)} className="fas fa-pen"></i>
                  <i
                    onClick={crossItem(key)}
                    className="fas fa-clipboard-check"
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
