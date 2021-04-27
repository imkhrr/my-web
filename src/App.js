import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useSetRecoilState } from "recoil";
import Router from "./router";
import { authenticated } from "./store/User";
import Loading from "./components/Loading";

function App(props) {

    const setAuth = useSetRecoilState(authenticated);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            setMounted(false)
            try {
                let { data } = await axios.get('me');
                setAuth({ check: true, user: data.data });
                console.log(data);
                setMounted(true)
            } catch (error) {
                setMounted(true);
                console.clear();
            };
        };
        getUser();
    }, [setAuth])

    if (!mounted) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    return <Router />
}

export default App;
