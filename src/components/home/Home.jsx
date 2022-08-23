import React from "react";
import HomeItem from "./HomeItem";

export default function Home({ home }) {
    return (
        <React.Fragment>
            {
                home.map((homes) => (
                    <HomeItem
                        brand={homes.brand}
                        tags={homes.tags}
                        desc={homes.desc}
                        interests={homes.interests}
                        key={null} />
                ))
            }
        </React.Fragment>
    );
}