import React from "react";
import NavBrand from "./NavBrand";
import NavItem from "./NavItem";

export default function NavList({ brand, items }) {
    return (
        <nav className="hidden sm:block w-full bg-white border-b font-quicksand fixed top-0 z-50">
            <div className="w-11/12 lg:w-3/4 h-14 lg:h-16 m-auto flex justify-between items-center box-border">
                {
                    brand.map((props) => (
                        <NavBrand brand={props.name} key={props.name} />
                    ))
                }
                <ul className="hidden sm:flex text-sm gap-11">
                    {
                        items.map((props) => (
                            <NavItem {...props} key={props.name} />
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
}