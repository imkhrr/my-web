import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { authenticated } from "../store/User";
import FormError from "../components/FormError";

function LoginPage(props) {
  const setAuth = useSetRecoilState(authenticated);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const history = useHistory();
  const data = { username, password };

  const auth = async (e) => {
    e.preventDefault();
    setErrors("");
    try {
      let response = await axios.post("login", data);
      localStorage.setItem("userToken", response.data.token);
      setAuth({ check: true, user: response.data.data });
      history.push("/");
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
            <div className="field pb-2">
              <label className="label">Login to Dashboard</label>
            </div>
            <div className="field">
              <label className="">Username</label>
              <div className="control">
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
              <label className="">Password</label>
              <div className="control">
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

export default LoginPage;
