import React from "react";

export default function NavItem({ name, link }) {
    return (
        <li>
            <a href={link}>{name}</a>
        </li>
    );
}