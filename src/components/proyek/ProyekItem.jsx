import React from "react";
import { RiExternalLinkLine } from 'react-icons/ri';
import TechList from "./TechList";

export default function PryekItem({ name, period, link, tech }) {
    return (
        <li>
            <h2 className="text-sm font-semibold">{name}</h2>
            <span className="text-sm">{period}</span>
            <section className="flex gap-1 items-center my-2">
                <ul className="flex gap-1">
                    {
                        tech.map((props) => (
                            <TechList {...props} key={props.name} />
                        ))
                    }
                </ul>
            </section>
            <a href={link} className="text-sm rounded-3xl border-zinc-400 border border-opacity-70 px-4 py-1 mt-3 w-36 text-center flex items-center justify-between hover:underline font-semibold opacity-90">Show Proyek <RiExternalLinkLine className="text-[16px]" /></a>
        </li>
    );
}