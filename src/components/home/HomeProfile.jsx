import React from "react";

export default function HomeProfile({ profile }) {
    return (
        <img src={profile} className="rounded-full border w-36 mt-10" alt="Pahrurozi" />
    );
}