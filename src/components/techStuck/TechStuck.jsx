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
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto pt-10 font-quicksand">
            <h1 className="text-xl font-bold">Tech Stack</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
                <div>
                    <h2 className="text-lg font-semibold">Languages</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-2"><RiHtml5Fill className="text-xl" /> HTML5</li>
                        <li className="flex items-center gap-2"><RiCss3Fill className="text-xl" /> CSS 3</li>
                        <li className="flex items-center gap-2"><FaJsSquare className="text-xl" />JavaScript</li>
                        <li className="flex items-center gap-2"><FaPhp className="text-xl" />PHP</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">JavaScript UI</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-2"><RiReactjsFill className="text-xl" /> React</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Plateform as a Service</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-2"><FaJsSquare className="text-xl" />Heroku</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Build Tools</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-2"><FaJsSquare className="text-xl" />Webpack</li>
                        <li className="flex items-center gap-2"><FaJsSquare className="text-xl" />Vite</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Frameworks (Fullstack)</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-2"><FaLaravel className="text-xl" />Laravel</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Databases</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-2"><FaLaravel className="text-xl" />MySQL</li>
                        <li className="flex items-center gap-2"><FaLaravel className="text-xl" />MongoDB</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Frontend Frameworks</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-2"><FaLaravel className="text-xl" />Bootstrap</li>
                        <li className="flex items-center gap-2"><FaLaravel className="text-xl" />Tailwind CSS</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold">Static Web Hosting</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-2"><FaLaravel className="text-xl" />Netlify</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}