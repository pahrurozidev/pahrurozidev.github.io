import React from "react";
import { SiWebpack, SiVite, SiMysql, SiMongodb, SiBootstrap, SiTailwindcss, SiNetlify, SiHeroku } from "react-icons/si";
import {
    RiHtml5Fill,
    RiCss3Fill,
    RiReactjsFill,
} from 'react-icons/ri'
import {
    FaJsSquare,
    FaPhp,
    FaLaravel
} from 'react-icons/fa';

export default function TechStuck({ techStucks }) {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto pt-10 font-quicksand">
            <h1 className="text-[16px] font-bold">Tech Stack</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
                <div>
                    <h2 className="text-sm font-semibold text-zinc-700">Languages</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-3"><RiHtml5Fill className="text-xl text-red-600" /> HTML5</li>
                        <li className="flex items-center gap-3"><RiCss3Fill className="text-xl text-cyan-600" /> CSS 3</li>
                        <li className="flex items-center gap-3"><FaJsSquare className="text-xl text-yellow-500" />JavaScript</li>
                        <li className="flex items-center gap-3"><FaPhp className="text-xl text-cyan-900" />PHP</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-zinc-700">JavaScript UI</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-3"><RiReactjsFill className="text-xl text-blue-400" /> React</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-zinc-700">Plateform as a Service</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-3"><SiHeroku className="text-xl text-blue-800" />Heroku</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-zinc-700">Build Tools</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-3"><SiWebpack className="text-xl text-blue-400" />Webpack</li>
                        <li className="flex items-center gap-3"><SiVite className="text-xl text-yellow-400" />Vite</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-zinc-700">Frameworks (Fullstack)</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-3"><FaLaravel className="text-xl text-red-600" />Laravel</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-zinc-700">Databases</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-3"><SiMysql className="text-xl text-blue-800" />MySQL</li>
                        <li className="flex items-center gap-3"><SiMongodb className="text-xl text-green-600" />MongoDB</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-zinc-700">Frontend Frameworks</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-3"><SiBootstrap className="text-xl text-blue-600" />Bootstrap</li>
                        <li className="flex items-center gap-3"><SiTailwindcss className="text-xl text-sky-500" />Tailwind CSS</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sm font-semibold text-zinc-700">Static Web Hosting</h2>
                    <ul className="text-sm mt-3 grid gap-4">
                        <li className="flex items-center gap-3"><SiNetlify className="text-xl text-sky-400" />Netlify</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}