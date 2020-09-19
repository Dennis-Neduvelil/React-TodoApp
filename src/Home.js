import React, { PureComponent } from "react";
import Menu from "./components/Menu";
import Welcome from "./components/welcome";

class Home extends PureComponent {
  state = {
    login: false,
  };

  componentDidMount() {
    this.loginCheck();
  }
  componentDidUpdate() {
    this.loginCheck();
  }
  loginCheck = () => {
    if (localStorage.getItem("user") === null) {
      this.setState({ login: false });
    } else {
      this.setState({ login: true });
    }
  };

  render() {
    if (this.state.login === true) {
      return <Menu />;
    } else {
      return <Welcome />;
    }
  }
}

export default Home;
