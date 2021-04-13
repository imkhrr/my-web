import React, { Component } from "react";
import HomePage from "../layouts/HomePage";
import LoginPage from "../layouts/LoginPage";

class WebRouter extends Component {
  state = {
    autheticated: true,
  };
  render() {
    return <div>{this.state.autheticated ? <HomePage /> : <LoginPage />}</div>;
  }
}

export default WebRouter;
