import React from "react";
import ExperiencesItem from "./ExperiencesItem";

export default function ExperiencesList({ experiences }) {
    return (
        <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto mt-10 pt-10 font-quicksand border-t border-slate-900 border-opacity-20">
            <h1 className="text-[16px] font-semibold">Experiences</h1>
            <ul className="mt-5 grid gap-y-5 text-[12px]">
                {
                    experiences.map((props) => (
                        <ExperiencesItem {...props} key={props.company} />
                    ))
                }
            </ul>
        </section>
    );
}