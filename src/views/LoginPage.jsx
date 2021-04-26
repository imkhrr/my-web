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
                            <div className="field pb-2 has-text-centered">
                                <label className="label">LOGIN</label>
                            </div>
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder="Username" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input type="password" className="input" placeholder="••••••••" />
                                </div>
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
