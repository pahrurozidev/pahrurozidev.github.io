import React from "react";

export default function Code({ code }) {
    return (
        <React.Fragment>
            <section className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto font-quicksand mt-10 sm:mt-24">
                <h1 className="text-[16px] font-semibold">Code Overview</h1>
                <p className="text-sm">This is a page for my learning result code</p>
                <ul className="mt-8 flex flex-col justify-center gap-y-6 text-sm opacity-90">
                    {
                        code.map((props) => (
                            <li className="border-b border-dashed border-slate-700 pb-2 flex justify-between" key={props.title}>
                                <a href={`/#/code/${props.link}`} className="hover:underline">{props.title}</a>
                                <p>{props.created}</p>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </React.Fragment >
    );
}