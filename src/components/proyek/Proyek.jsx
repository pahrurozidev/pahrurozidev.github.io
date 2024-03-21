import React from "react";
import ProyekItem from './ProyekItem';

export default function Proyek({ proyek }) {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto pt-10 mt-10 font-quicksand border-t border-slate-900 border-opacity-30">
            <h1 className="text-[16px] font-semibold">Projects</h1>
            <ul className="mt-5 grid gap-y-5 text-[12px]">
                {
                    proyek.map((props) => (
                        <ProyekItem {...props} key={props.name} />
                    ))
                }
            </ul>
        </section>
    );
}