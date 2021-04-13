import React, { Component } from "react";

class LoginPage extends Component {
  render() {
    return (
      <div className="has-background-light">
        <div
          className="columns is-mobile is-centered is-vcentered"
          style={{ minHeight: "100vh" }}
        >
          <div className="column" style={{ maxWidth: "400px" }}>
            <form className="box">
              <div className="field pb-2">
                <label className="label">Login to Dashboard</label>
              </div>
              <div className="field">
                <label className="">Username</label>
                <div className="control">
                  <input type="text" className="input" placeholder="Username" />
                </div>
              </div>
              <div className="field">
                <label className="">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="field pt-2 px-1">
                <nav className="level is-mobile">
                  <div className="level-left">
                    <div className="level-item">
                      <label className="checkbox">
                        <input type="checkbox" />
                        <span className="pl-2">Remember me</span>
                      </label>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <a href="/forgot">Forgot Password ?</a>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="field">
                <button className="button is-info is-fullwidth">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
