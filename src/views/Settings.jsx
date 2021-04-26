import React, { Component } from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ maxHeight: "100vh" }}>
                <Navbar />
                <div className="columns" style={{ paddingTop: "4rem" }}>
                    <div className="column is-hidden-touch is-2">
                        <Sidebar />
                    </div>
                    <div className="column">
                        <div className="content px-4">
                            <div className="pb-4">
                                <span className="is-size-5">Pengaturan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
