import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

class User extends Component {
  render() {
    return (
      <div style={{ maxHeight: "100vh" }}>
        <Navbar />
        <div className="columns" style={{ paddingTop: "4rem" }}>
          <div className="column is-hidden-touch is-2">
            <Sidebar />
          </div>
          <div className="column">User</div>
        </div>
      </div>
    );
  }
}

export default User;
