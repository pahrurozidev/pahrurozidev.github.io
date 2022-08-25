import React from "react";
import {
    RiMapPinLine,
    RiCodeSSlashFill,
    RiReactjsLine,
    RiChromeFill,
    RiGithubFill,
    RiLinkedinBoxFill
} from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import Profile from '../../assets/pahrurozi.png';

export default function HomeItem({ brand, tags, icons, desc, interests }) {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto font-quicksand mt-24">
            {/* profile */}
            <img src={Profile} className="rounded-full border w-36 mt-10" alt="Pahrurozi" />
            {/* name */}
            <h1 className="text-3xl font-semibold mt-1">{brand.name}</h1>
            {/* tags */}
            <ul className="flex flex-wrap gap-3 text-sm">
                <li>&#64;pahrurozi</li>
                <li className="flex items-center gap-1"><RiMapPinLine className="text-red-600" />Lombok</li>
                <li className="flex items-center gap-1"><RiCodeSSlashFill className="text-yellow-500" /> Frontend Developer</li>
            </ul>
            {/* describe */}
            <p className="mt-2 text-lg">{desc.name}</p>
            {/* interests */}
            <ul className="flex flex-wrap gap-3 text-[16px] mt-3">
                <li className="border border-slate-400 rounded-lg px-2 p-1 flex items-center gap-1"><RiCodeSSlashFill className="text-yellow-500" />Frontend Developer</li>
                <li className="border border-slate-400 rounded-lg px-2 p-1 flex items-center gap-1"><RiReactjsLine className="text-blue-400" />React Developer</li>
                <li className="border border-slate-400 rounded-lg px-2 p-1 flex items-center gap-1"><FaNodeJs className="text-green-700" />Node Js</li>
                <li className="border border-slate-400 rounded-lg px-2 p-1 flex items-center gap-1"><RiChromeFill className="text-red-600" />Web Developer</li>
            </ul>
            {/* social media */}
            <ul className="flex justify-between text-2xl w-14 mt-4">
                <li><a href="https://github.com/pahrurozidev"><RiGithubFill/></a></li>
                <li><a href="https://www.linkedin.com/in/pahrurozi/"><RiLinkedinBoxFill className="text-blue-800" /></a></li>
            </ul>
        </section >
    );
}