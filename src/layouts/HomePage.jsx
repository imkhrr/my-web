import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "../containers/Dashboard";
import Transaksi from "../containers/Transaksi";
import Pengaturan from "../containers/Pengaturan";

import Navbar from "../containers/Navbar";
import Sidebar from "../containers/Sidebar";
import Barang from "../containers/Barang";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div style={{ maxHeight: "100vh" }}>
          <Navbar />
          <div className="columns" style={{ paddingTop: "4rem" }}>
            <div className="column is-hidden-touch is-2">
              <Sidebar />
            </div>
            <div className="column">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/transaksi" component={Transaksi} />
                <Route path="/barang" component={Barang} />
                <Route path="/pengaturan" component={Pengaturan} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default HomePage;
