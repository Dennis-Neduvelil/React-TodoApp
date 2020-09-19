import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./components/about";
import Todo from "./components/todo";
import Todoclass from "./components/todoclass";
import Footer from "./footer";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/class" component={Todoclass} />
      <Route path="/function" component={Todo} />
      <Route path="/about" component={About} />
      <Footer />
    </Router>
  );
}

export default App;
