import React, { useEffect, useState } from "react";
import { GrHomeRounded } from 'react-icons/gr';
import { CgAddR } from 'react-icons/cg';
import { TbSend } from 'react-icons/tb';
import { FaRegCompass } from 'react-icons/fa';
import Pahrurozi from '../../../assets/pahrurozi.webp';

export default function Menu({ onShowFormChange }) {
    const handleAddButtonClicked = () => {
        onShowFormChange(true)
    }

    return (
        <section className="w-full fixed z-50 bottom-0">
            <div className="h-12 flex justify-between px-8 bg-white">
                <button type="button"><GrHomeRounded /></button>
                <button type="button"><FaRegCompass /></button>
                <button type="button"><CgAddR onClick={() => handleAddButtonClicked()} /></button>
                <button type="button"><TbSend /></button>
                <button type="button"><img src={Pahrurozi} className="w-[22px] h-[22px] rounded-full" alt="" /></button>
            </div>
        </section>
    );
}
