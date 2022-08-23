import React from "react";
import NavItem from "./NavItem";

export default function Navbar({ navbar }) {
    return (
        <React.Fragment>
            {
                navbar.map((nav) => (
                    <NavItem brand={nav.brand} items={nav.items} key={null} />
                ))
            }
        </React.Fragment>
    );
}