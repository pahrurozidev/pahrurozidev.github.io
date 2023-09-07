import React from "react";
import { Routes as Switch, Route, HashRouter } from "react-router-dom";
import Main from "../pages/Main";
import { Database } from "../utils/Database";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Code from '../components/code/Code';
import Menu from "../components/menu/Menu";
import UseState from '../components/code/useState/UseState';
import UseEffect from "../components/code/useEffect/UseEffect";
import UseContext from "../components/code/useContext/UseContext";
import UseRef from "../components/code/useRef/UseRef";
import UseReduce from "../components/code/useReduce/UseReduce";
import App from "../pages/App";
import MetaWallet from '../components/app/metaWallet/Index'
import WalletDetail from '../components/app/metaWallet/Detail'
import HistoryApp from '../components/app/historyapp/Index';
import Post from "../components/app/historyapp/Post";

export default function Routes() {
    const database = Database();

    return (
        <React.Fragment>
            <Navbar navbar={database.navbar} />
            <HashRouter>
                <Switch>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/code" element={<Code code={database.code} />} />
                    <Route path="/code/useState" element={<UseState />} />
                    <Route path="/code/useEffect" element={<UseEffect />} />
                    <Route path="/code/useContext" element={<UseContext />} />
                    <Route path="/code/useRef" element={<UseRef />} />
                    <Route path="/code/useReducer" element={<UseReduce />} />

                    {/* apps */}
                    <Route path="/app" element={<App />} />

                    {/* meta-wallet */}
                    <Route path="/app/meta-wallet" element={<MetaWallet />} />
                    <Route path="/app/meta-wallet/:slug" element={<WalletDetail />} />

                    {/* historyapp */}
                    <Route path="/app/historyapp" element={<HistoryApp />} />
                    <Route path="/app/historyapp/:id" element={<Post />} />
                </Switch>
                <Menu />
            </HashRouter>
            <Footer footer={database.footer} />
        </React.Fragment>
    );
}
