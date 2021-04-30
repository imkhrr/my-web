import axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authenticated } from "../store/User";
import FormError from "../components/FormError";

function LoginPage(props) {
    const setAuth = useSetRecoilState(authenticated);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const data = { username, password };

    const auth = async (e) => {
        e.preventDefault();
        setErrors("");
        try {
            let response = await axios.post("login", data);
            localStorage.setItem("userToken", response.data.token);
            setAuth({ check: true, user: response.data.data });
        } catch (e) {
            setErrors(e.response.data.errors);
            console.clear();
        }
    };
    return (
        <div className="has-background-light">
            <div
                className="columns is-mobile is-centered is-vcentered"
                style={{ minHeight: "100vh" }}
            >
                <div className="column" style={{ maxWidth: "400px" }}>
                    {errors.message ? (
                        <div className="notification is-danger is-light is-small">
                            {errors.message[0]}
                        </div>
                    ) : (
                        ""
                    )}
                    <form className="box" onSubmit={auth}>
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-right">
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={`input ${errors ? "is-danger" : ""}`}
                                    type="text"
                                    placeholder="Username"
                                />
                                {errors.username ? (
                                    <FormError message={errors.username[0]} />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-right">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`input ${errors ? "is-danger" : ""}`}
                                    type="password"
                                    placeholder="••••••••"
                                />
                                {errors.password ? (
                                    <FormError message={errors.password[0]} />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className="field pt-4">
                            <button className="button is-info is-fullwidth"> <strong> LOGIN </strong> </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
