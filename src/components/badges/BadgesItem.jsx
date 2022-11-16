import React from "react";

export default function BadgesItem({ link, image, name }) {
    return (
        <li>
            <a href={link}><img src={image} className="rounded" alt={name} /></a>
        </li>
    )
}
