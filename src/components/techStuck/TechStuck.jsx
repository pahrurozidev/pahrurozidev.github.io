import React from "react";
import {
    RiHtml5Fill,
    RiCss3Fill,
    RiReactjsFill
} from 'react-icons/ri'
import {
    FaJsSquare,
    FaPhp,
    FaLaravel,
} from 'react-icons/fa';

export default function TechStuck({ techStucks }) {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto pt-14 font-quicksand">
            <h1 className="text-lg font-bold">Tech Stack</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                <div>
                    <h2 className="text-sm font-semibold">Languages</h2>
                    <ul className="text-sm mt-2 grid gap-2">
                        <li className="flex items-center gap-1"><RiHtml5Fill /> HTML5</li>
                        <li className="flex items-center gap-1"><RiCss3Fill /> CSS 3</li>
                        <li className="flex items-center gap-1"><FaJsSquare />JavaScript</li>
                        <li className="flex items-center gap-1"><FaPhp />PHP</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold">JavaScript UI</h2>
                    <ul className="text-sm mt-2 grid gap-2">
                        <li className="flex items-center gap-1"><RiReactjsFill /> React</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold">Plateform as a Service</h2>
                    <ul className="text-sm mt-2 grid gap-2">
                        <li className="flex items-center gap-1"><FaJsSquare />Heroku</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold">Build Tools</h2>
                    <ul className="text-sm mt-2 grid gap-2">
                        <li className="flex items-center gap-1"><FaJsSquare />Webpack</li>
                        <li className="flex items-center gap-1"><FaJsSquare />Vite</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold">Frameworks (Fullstack)</h2>
                    <ul className="text-sm mt-2 grid gap-2">
                        <li className="flex items-center gap-1"><FaLaravel />Laravel</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold">Databases</h2>
                    <ul className="text-sm mt-2 grid gap-2">
                        <li className="flex items-center gap-1"><FaLaravel />MySQL</li>
                        <li className="flex items-center gap-1"><FaLaravel />MongoDB</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold">Frontend Frameworks</h2>
                    <ul className="text-sm mt-2 grid gap-2">
                        <li className="flex items-center gap-1"><FaLaravel />Bootstrap</li>
                        <li className="flex items-center gap-1"><FaLaravel />Tailwind CSS</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold">Static Web Hosting</h2>
                    <ul className="text-sm mt-2 grid gap-2">
                        <li className="flex items-center gap-1"><FaLaravel />Netlify</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}