import React from "react";
import Dicoding from '../../assets/dicoding.png';

export default function Proyek() {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto pt-10 font-quicksand">
            <h1 className="text-[16px] font-semibold">Proyek</h1>
            <ul className="mt-5 grid gap-y-5 text-[12px]">
                <li>
                    <h2 className="text-sm font-semibold">Sipantas App</h2>
                    <span className="text-sm">Jul 2022 - Jun 2022 · 1 month</span>
                    <a href="http://sipantas.herokuapp.com/" className="block text-sm rounded-3xl border-zinc-600 border px-2 py-1 mt-2 w-36 text-center">Tampilkan proyek</a>
                </li>
                <li>
                    <h2 className="text-sm font-semibold">Personal Portfolio </h2>
                    <span className="text-sm">Aug 2022 - Present · 1 month</span>
                    <a href="https://pahrurozidev.github.io/" className="block text-sm rounded-3xl border-zinc-600 border px-2 py-1 mt-2 w-36 text-center">Tampilkan proyek</a>
                </li>
            </ul>
        </section>
    );
}