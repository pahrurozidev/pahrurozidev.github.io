import React, { useState } from "react";
import { CgMenuGridO, CgCodeSlash } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai';
import { Helmet } from "react-helmet";

export default function Menu() {
    const [menu, setMenu] = useState(false);
    const [style, setStyle] = useState({
        bgBody: "white",
        opacitySection: 1
    })

    function showMenu() {
        (menu === false) ? setMenu(true) : setMenu(false);
        console.log(style.opacitySection);
        (style.opacitySection === 1) ?
            setStyle(() => {
                return { bgBody: "", opacitySection: 0.1 }
            }) : setStyle(() => {
                return { bgBody: "white", opacitySection: 1 }
            });
    }

    return (
        <React.Fragment>
            <Helmet>
                <style>{"body { background: " + ` ${style.bgBody}; ` + " }"}</style>
                <style>{"section, footer { opacity: " + ` ${style.opacitySection}; ` + " }"}</style>
            </Helmet >
            <div
                className="toggle sm:hidden fixed bottom-16 right-9 font-quicksand z-50">
                <ul className="text-right hidden text-sm text-white" style={(menu == true) ? { display: 'block' } : {}}>
                    <li className="mb-10">
                        <a href="/" className="link flex items-center flex-row-reverse gap-3 bg-slate-900 pl-5 rounded-full shadow-lg shadow-slate-700">
                            <AiOutlineHome className="text-4xl bg-sky-400 rounded-full p-2" />Home</a>
                    </li>
                    <li className="mb-10">
                        <a href="/#/app" className="flex items-center flex-row-reverse gap-3 bg-slate-900 pl-5 rounded-full shadow-lg shadow-slate-700">
                            <CgMenuGridO className="text-4xl rounded-full p-2 bg-red-500" onClick={() => showMenu()} />App</a>
                    </li>
                    <li className="mb-10">
                        <a href="/#/code" className="flex items-center flex-row-reverse gap-3 bg-slate-900 pl-5 rounded-full shadow-lg shadow-slate-700">
                            <CgCodeSlash className="text-4xl rounded-full p-2 bg-yellow-300" onClick={() => showMenu()} />Code</a>
                    </li>
                </ul>
            </div>
            <div className="sm:hidden fixed bottom-8 right-8 z-50 cursor-pointer">
                <CgMenuGridO
                    className="text-[42px] text-white bg-slate-900 rounded-full p-[5px] border border-white shadow-lg shadow-slate-600"
                    onClick={() => showMenu()} />
            </div>
        </React.Fragment>
    );
}