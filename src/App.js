import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Todo from "./components/todo";
import Todoclass from "./components/todoclass";
import Footer from "./components/Footer";
import Home from "./Home";
import "./Style.css"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/class" component={Todoclass} />
      <Route path="/function" component={Todo} />
      <Footer />
    </Router>
  );
}

export default App;
