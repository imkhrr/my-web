import axios from "axios";
import React, { useState } from "react";
import { CgProfile, CgLogOut, CgStyle } from "react-icons/cg";
import { NavLink, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticated } from "../store/User";
import Sidebar from "./Sidebar";

function Navbar(props) {
    
    const [auth, setAuth] = useRecoilState(authenticated);
    const [navt, setNavt] = useState(true);
    const history = useHistory();


    const Logout = async (e) => {
        e.preventDefault();

        try {
            await axios.post('logout');
            setAuth({ check: false, user: [] });
            localStorage.removeItem('userToken');
            history.push('/login');
        } catch (error) {
            console.log(error.response.data);
        }

    }

    const toggleNavbar = () => {
        setNavt(!navt);
    };

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

                <span
                    role="button"
                    className={
                        navt
                            ? "navbar-burger  has-text-white"
                            : "navbar-burger  has-text-white is-active"
                    }
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navMenu"
                    onClick={toggleNavbar}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </span>
            </div>

            <div id="navMenu" className={navt ? "navbar-menu" : "navbar-menu is-active"} >
                <div className="navbar-start">
                    <div className="is-hidden-desktop animate__animated animate__fadeIn animate__faster">
                        <Sidebar />
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable pr-4">
                        <span className="navbar-link has-text-white is-arrowless is-hidden-touch">
                            <span className="icon-text pr-2">
                                <span className="icon">
                                    <i> <CgProfile className="react-icons" /> </i>
                                </span>
                            </span>
                            <span> { auth.user.name } </span>
                        </span>
                        <div className="navbar-dropdown">
                            <div className="navbar-item">
                                <NavLink to="/settings">
                                    <span className="icon-text">
                                        <i className="icon"> <CgStyle className="react-icons-sidebar" /> </i>
                                        <span>Pengaturan</span>
                                    </span>
                                </NavLink>
                            </div>
                            <div className="navbar-item">
                                <NavLink to="" onClick={ Logout }>
                                    <span className="icon-text">
                                        <i className="icon"> <CgLogOut className="react-icons-sidebar" /> </i>
                                        <span>Keluar</span>
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
