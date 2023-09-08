import React from "react";
import Pahrurozi from '../../../assets/pahrurozi.webp';
import { RiUserAddLine } from 'react-icons/ri';

export default function Header() {
    return (
        <section className="px-5">
            <div className="flex gap-4">
                <img src={Pahrurozi} className="w-1/4 rounded-full" alt="pahrurozi" />
                <div>
                    <h1 className="font-semibold text-lg">Pahrurozi</h1>
                    <div className="flex gap-2 mt-[6px] text-[12px]">
                        <button type="button" className="w-16 px-2 py-1 text-white bg-blue-400 rounded-md">Follow</button>
                        <button type="button" className="w-16 px-2 py-1 rounded-md bg-neutral-200">Message</button>
                        <button type="button" className="px-2 py-1 rounded-md bg-neutral-200"><RiUserAddLine /></button>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-sm mt-2">There's nothing special here! This page is my personal social media. Why did I make it? I like to interpret every moment of my life through the photos I upload, you can't follow me on this account because the follow button can't work😄. But you can follow and connect with me via my <a href="https://www.linkedin.com/in/pahrurozi/" target="_blank" className="text-green-600 underline">LinkedIn</a>. Thanks for visiting this page, I hope to connect with you. Have a nice day💫</p>
            </div>
        </section>
    );
}