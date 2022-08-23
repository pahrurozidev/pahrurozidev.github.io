import React from "react";
import Dicoding from '../../assets/dicoding.png';

export default function Proyek() {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto pt-14 font-quicksand">
            <h1 className="texl-lg font-semibold">Team and Self Project</h1>
            <ul className="mt-5 grid gap-y-5 text-[12px]">
                <li className="flex items-center gap-x-3 sm:gap-x-0">
                    <div className="w-[13%]">
                        <img src={Dicoding} className="rounded" alt="Dicoding Logo" />
                    </div>
                    <div className="w-[86%]">
                        <h2 className="text-sm font-semibold">Sipantas APP</h2>
                        <p>Binar Academy • Contract</p>
                        <span>Feb 2022 - Jul 2022 • 7 month</span>
                    </div>
                </li>
                <li className="flex items-center gap-x-3 sm:gap-x-0">
                    <div className="w-[13%]">
                        <img src={Dicoding} className="rounded" alt="Dicoding Logo" />
                    </div>
                    <div className="w-[86%]">
                        <h2 className="text-sm font-semibold">Frontend Web and Backend Developer Student</h2>
                        <p>Dicoding Indonesia • Contract</p>
                        <span>Feb 2022 - Jul 2022 • 7 month</span>
                    </div>
                </li>
                <li className="flex items-center gap-x-3 sm:gap-x-0">
                    <div className="w-[13%]">
                        <img src={Dicoding} className="rounded" alt="Dicoding Logo" />
                    </div>
                    <div className="w-[86%]">
                        <h2 className="text-sm font-semibold">Web Developer</h2>
                        <p>Citrust Sari Indonesia • Internship</p>
                        <span>Feb 2022 - Jul 2022 • 7 month</span>
                    </div>
                </li>
            </ul>
        </section>
    );
}