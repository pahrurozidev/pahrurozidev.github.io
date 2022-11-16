import React from "react";
import BadgesItem from './BadgesItem';

export default function Badges({ badges }) {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto pt-10 mt-10 font-quicksand border-t border-slate-900 border-opacity-20">
            <h1 className="text-[16px] font-semibold">Badges / Certificates</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 mt-5">
                {
                    badges.map((props) => (
                        <BadgesItem {...props} key={props.name} />
                    ))
                }
            </ul>
        </section>
    )
}