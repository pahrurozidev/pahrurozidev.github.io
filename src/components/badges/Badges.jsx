import React from "react";
import FEExpert from '../../assets/FEExpert.png';

export default function Badges({ badges }) {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto pt-10 font-quicksand">
            <h1 className="text-lg font-semibold">Badges & Certificates</h1>
            <ul className="w-full flex flex-wrap gap-2 mt-5">
                <li className="w-[45%] md:w-[25%]">
                    <a href="#"><img src={FEExpert} className="rounded" alt="" /></a>
                </li>
                <li className="w-[45%] md:w-[25%]">
                    <a href="#"><img src={FEExpert} className="rounded" alt="" /></a>
                </li>
                <li className="w-[45%] md:w-[25%]">
                    <a href="#"><img src={FEExpert} className="rounded" alt="" /></a>
                </li>
            </ul>
        </section>
    )
}