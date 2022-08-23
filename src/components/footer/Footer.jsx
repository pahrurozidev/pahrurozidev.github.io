import React from "react";

export default function Footer({ footer }) {
    return (
        <footer className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto mt-14 border-t border-slate-300 font-quicksand">
            <section className="h-28 flex justify-between items-center text-[11px] md:text-sm">
                <p>Copyright @2022 Pahrurozi</p>
                <div className="border border-slate-500 px-3 py-2 rounded">Design inspired by <a href="#" className="font-semibold">Showwcase</a></div>
            </section>
        </footer>
    );
}