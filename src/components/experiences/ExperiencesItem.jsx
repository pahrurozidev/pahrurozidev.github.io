import React from "react";

export default function ExperiencesItem({ position, period, company, companyIcon, link }) {
    return (
        <li className="flex items-center gap-x-3">
            <a href={link} >
                <img src={companyIcon} className="w-[50px] sm:w-14 rounded" alt={company} />
            </a>
            <div>
                <h2 className="text-sm font-semibold">{position}</h2>
                <p className="text-sm">{company}</p>
                <span className="text-sm">{period}</span>
            </div>
        </li>
    );
}