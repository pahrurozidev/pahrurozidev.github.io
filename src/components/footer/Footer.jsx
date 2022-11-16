import React from "react";

export default function Footer({ footer }) {
    return (
        <footer className="w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto mt-20 border-t border-slate-400 font-quicksand absolute inset-x-0">
            <section className="h-32 flex flex-col sm:flex-row text-sm items-center justify-center sm:justify-between gap-5">
                <p>Copyright &#64;2022 Pahrurozi</p>
                <div className="w-2/1 border border-slate-500 px-3 py-2 rounded-lg">Design inspired by <a href="https://www.showwcase.com/" className="font-semibold opacity-90">Showwcase</a></div>
            </section>
        </footer>
    );
}