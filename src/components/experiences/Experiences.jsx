import React from "react";
import Dicoding from '../../assets/dicoding.png';

function Experiences() {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto pt-10 font-quicksand">
            <h1 className="text-[16px] font-semibold">Experiences</h1>
            <ul className="mt-5 grid gap-y-5 text-[12px]">
                <li className="flex items-start gap-x-3">
                    <img src={Dicoding} className="w-[50px] sm:w-14 rounded" alt="Dicoding Logo" />
                    <div>
                        <h2 className="text-sm font-semibold">Fullstack Web Developer Student</h2>
                        <p className="text-sm">Binar Academy</p>
                        <span className="text-sm">Aug 2022 - Present · 1 month</span>
                    </div>
                </li>
                <li className="flex items-start gap-x-3">
                    <img src={Dicoding} className="w-[50px] sm:w-14 rounded" alt="Dicoding Logo" />
                    <div>
                        <h2 className="text-sm font-semibold">Web Developer</h2>
                        <p className="text-sm">Binar Academy</p>
                        <span className="text-sm">Jun 2022 - Sep 2022 · 3 month</span>
                    </div>
                </li>
                <li className="flex items-start gap-x-3">
                    <img src={Dicoding} className="w-[50px] sm:w-14 rounded" alt="Dicoding Logo" />
                    <div>
                        <h2 className="text-sm font-semibold">Frontend Web and Backend Developer Student</h2>
                        <p className="text-sm">Binar Academy</p>
                        <span className="text-sm">Feb 2022 - Jul 2022 · 7 month</span>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Experiences;