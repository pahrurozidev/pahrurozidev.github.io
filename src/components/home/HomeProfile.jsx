import React from "react";

export default function HomeProfile({ profile }) {
    return (
        <img src={profile} className="rounded-full border-2 border-slate-200 w-36 mt-10" alt="Pahrurozi" />
    );
}