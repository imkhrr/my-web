import React, { Component } from "react";
import { CgAdd, CgSearch, CgSortAz } from "react-icons/cg";
import DataTableUsers from "../components/tables/DataTableUsers";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

class Users extends Component {
    render() {

        const usersData = [
            {
                id: 1,
                name: "Mark Zuckerberg",
                username: "mark",
                address: "Jl Jeruk pare kediri"
            },
            {
                id: 1,
                name: "Mohammad Amirul Huda",
                username: "amirul",
                address: "Jl semangka pare kediri"
            },
            {
                id: 1,
                name: "Nokie Pratama",
                username: "nokie",
                address: "Jl belewah pare kediri"
            },
            {
                id: 1,
                name: "Via trimey",
                username: "via",
                address: "Jl nanas pare kediri"
            }
        ];

        return (
            <div style={{ maxHeight: "100vh" }}>
                <Navbar />
                <div className="columns" style={{ paddingTop: "4rem" }}>
                    <div className="column is-hidden-touch is-2">
                        <Sidebar />
                    </div>
                    <div className="column">
                        <div className="content pt-2 px-4">
                            <div className="animate__animated animate__fadeIn animate__fast" style={{ minHeight: "80vh" }} >
                                <div className="columns">
                                    <div className="column">
                                        <div className="pb-4 is-flex is-justify-content-space-between">
                                            <span className="is-size-5">Data Pengguna</span>
                                            <div className="field is-grouped">
                                                <div className="control has-icons-left">
                                                    <input className="input is-small" type="text" placeholder="Keyword" />
                                                    <span className="icon is-small is-left"> <i className="icon"> <CgSearch className="react-icons-sidebar" /> </i> </span>
                                                </div>
                                                <div className="control">
                                                    <button className="button is-info is-small is-light">
                                                        <i className="icon"> <CgSortAz className="react-icons-sidebar" /> </i>
                                                        <span>Urutkan</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <DataTableUsers listdata={ usersData } />
                                    </div>
                                </div>
                            </div>
                            <div className="is-flex is-justify-content-space-between">
                                <div></div>
                                <button className="button is-info" onClick={this.toAdd}>
                                    <i className="icon">
                                        <CgAdd className="react-icons-sidebar" />
                                    </i>
                                    <span>Tambah Data</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
