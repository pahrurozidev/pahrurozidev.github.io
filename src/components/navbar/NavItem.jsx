import React from "react";

export default function NavItem({ brand, items }) {
    return (
        <nav className="w-full bg-white border-b font-quicksand fixed top-0">
            <div className="w-11/12 lg:w-3/4 h-14 lg:h-12 m-auto flex justify-between items-center box-border">
                {/* nav__brand */}
                {brand.map((props) => <h1 className="text-xl font-semibold" key={props.name}>{props.name}</h1>)}
                <ul className="hidden sm:flex text-sm gap-11">
                    {/* nav__item */}
                    {items.map((item) => <li key={item.name}><a href="#">{item.name}</a></li>)}
                </ul>
            </div>
        </nav>
    );
}