import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import About from "./components/about";
import Head from "./components/Head";
import todo from "./components/todo";
import Todoclass from "./components/todoclass";
import Footer from "./footer";

function App() {
  return (
    <Router>
        <Head/>
        <Route path="/" exact component={Todoclass}/>
        <Route path="/function" component={todo}/>
        <Route path="/about" component={About}/>
        <Footer/>
      </Router>
  );
}

export default App;
