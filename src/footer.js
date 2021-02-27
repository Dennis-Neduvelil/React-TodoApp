import React from "react";

export default function Footer() {
  return (
    <footer>
      <h4>
        - Designed and Developed by{" "}
        <span>
          {" "}
          Dennis and Dibin <i className="fab fa-x fa-react fa-spin"></i>&nbsp;
          <i
            onClick={() => {
              window.open("https://github.com/Dennis-Neduvelil/React-TodoApp");
            }}
            class="fab fa-github"
          ></i>
        </span>{" "}
        -
      </h4>
    </footer>
  );
}
