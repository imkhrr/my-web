import React, { Component } from "react";
import { CgProfile } from "react-icons/cg";
import Sidebar from "./Sidebar";

class Navbar extends Component {
  state = {
    navt: true,
  };

  toggleNavbar = () => {
    this.setState({
      navt: !this.state.navt,
    });
  };

  render() {
    const { navt } = this.state;

    return (
      <nav
        className="navbar has-background-info is-fixed-top is-transparent has-background-white"
        role="navigation"
        aria-label="main navigation"
        style={{
          boxShadow:
            "0 0.5em 1em -0.125em rgb(10 10 10 / 6%), 0 0px 0 1px rgb(10 10 10 / 2%)",
        }}
      >
        <div className="navbar-brand">
          <div className="navbar-item pl-4">
            <span className="is-size-5 has-text-white">Hoki Noki</span>
          </div>

          <a
            href="#"
            role="button"
            className={
              navt
                ? "navbar-burger  has-text-white"
                : "navbar-burger  has-text-white is-active"
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            onClick={this.toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navMenu"
          className={navt ? "navbar-menu" : "navbar-menu is-active"}
        >
          <div className="navbar-start">
            <div className="is-hidden-desktop animate__animated animate__fadeIn animate__faster">
              <Sidebar />
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable pr-4">
              <a
                className="navbar-link has-text-white is-arrowless is-hidden-touch"
                href="#"
              >
                <span className="icon-text pr-2">
                  <span className="icon">
                    <i>
                      <CgProfile className="react-icons" />
                    </i>
                  </span>
                </span>
                <span>Administrator</span>
              </a>
              {/* <div className="navbar-dropdown">
                <div className="navbar-item">
                  <a href="/keluar">
                    <span className="icon-text">
                      <i className="icon">
                        <CgLogOut className="react-icons-sidebar" />
                      </i>
                      <span>Keluar</span>
                    </span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
