import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { RecoilRoot } from 'recoil';
import axios from 'axios';

import "./styles/index.css";
import "./styles/colors.css";
import "./styles/icons.css";
import "./styles/table.css";

import "bulma/css/bulma.min.css";
import "animate.css/animate.css";

import reportWebVitals from "./reportWebVitals";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('userToken')}`;
    return config;
});

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
