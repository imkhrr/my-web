import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
    CgBookmark,
    CgChart,
    CgHomeAlt,
    CgMenuBoxed,
    CgMenuGridO,
    CgProfile,
    CgShoppingBag,
    CgShoppingCart,
    CgUserList,
} from "react-icons/cg";
import "../styles/sidebar.css";

class Sidebar extends Component {
    render() {
        return (
            <nav className="menu pl-4 pr-4 pt-1">
                <div className="">
                    <p className="menu-label">Main Menu</p>
                    <ul className="menu-list">
                        <li>
                            <NavLink exact to="/" activeClassName="is-active">
                                <span className="icon-text">
                                    <span className="icon is-red">
                                        <i>
                                            <CgHomeAlt className="react-icons-sidebar" />
                                        </i>
                                    </span>
                                    <span>Dashboard</span>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/transaksi" activeClassName="is-active">
                                <span className="icon-text">
                                    <span className="icon is-deep-purple">
                                        <i>
                                            <CgShoppingCart className="react-icons-sidebar" />
                                        </i>
                                    </span>
                                    <span>Transaction</span>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                    <p className="menu-label">Manajemen</p>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/commodity" activeClassName="is-active">
                                <span className="icon-text">
                                    <span className="icon is-teal">
                                        <i>
                                            {" "}
                                            <CgMenuBoxed className="react-icons-sidebar" />{" "}
                                        </i>
                                    </span>
                                    <span>Items</span>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" activeClassName="is-active">
                                <span className="icon-text">
                                    <span className="icon is-purple">
                                        <i>
                                            {" "}
                                            <CgProfile className="react-icons-sidebar" />{" "}
                                        </i>
                                    </span>
                                    <span>Users</span>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/customers" activeClassName="is-active">
                                <span className="icon-text">
                                    <span className="icon is-deep-orange">
                                        <i>
                                            {" "}
                                            <CgUserList className="react-icons-sidebar" />{" "}
                                        </i>
                                    </span>
                                    <span>Customers</span>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/suppliers" activeClassName="is-active">
                                <span className="icon-text">
                                    <span className="icon is-pink">
                                        <i>
                                            {" "}
                                            <CgShoppingBag className="react-icons-sidebar" />{" "}
                                        </i>
                                    </span>
                                    <span>Suppliers</span>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                    <p className="menu-label">Laporan</p>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/penjualan" activeClassName="is-active">
                                <span className="icon-text">
                                    <span className="icon is-indigo">
                                        <i>
                                            {" "}
                                            <CgBookmark className="react-icons-sidebar" />{" "}
                                        </i>
                                    </span>
                                    <span>Penjualan</span>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/stokopname" activeClassName="is-active">
                                <span className="icon-text">
                                    <span className="icon is-brown">
                                        <i>
                                            {" "}
                                            <CgMenuGridO className="react-icons-sidebar" />{" "}
                                        </i>
                                    </span>
                                    <span>Stok Opname</span>
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistik" activeClassName="is-active">
                                <span className="icon-text">
                                    <span className="icon is-blue-grey">
                                        <i>
                                            {" "}
                                            <CgChart className="react-icons-sidebar" />{" "}
                                        </i>
                                    </span>
                                    <span>Statistik</span>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
