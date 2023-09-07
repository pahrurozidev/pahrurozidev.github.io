import React from "react";
import Pahrurozi from '../../../assets/pahrurozi.webp';

export default function Header() {
    return (
        <section className="px-5">
            <div className="flex">
                <img src={Pahrurozi} className="w-1/4 rounded-full" alt="pahrurozi" />
                <div>
                    <h1 className="font-semibold">Pahrurozi</h1>
                    <div className="flex">
                        <button type="button" className="bg-blue-400">Follow</button>
                        <button type="button" className="border border-blue-400">Message</button>
                        <button>Tes</button>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-sm">Experienced Web Developer • Proficient Frontend Developer</p>
            </div>
        </section>
    );
}