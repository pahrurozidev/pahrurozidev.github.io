import React from "react";
import NavList from "./NavList";

export default function Navbar({ navbar }) {
    return (
        <React.Fragment>
            {
                navbar.map((nav) => (
                    <NavList brand={nav.brand} items={nav.items} key={nav} />
                ))
            }
        </React.Fragment>
    );
}