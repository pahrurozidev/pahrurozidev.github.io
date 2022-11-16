import React from "react";
import HomeItem from "./HomeItem";
import Profile from '../../assets/pahrurozi.webp';

export default function Home({ home }) {
    return (
        <React.Fragment>
            {
                home.map((props) => (
                    <HomeItem
                        brand={props.brand}
                        tags={props.tags}
                        desc={props.desc}
                        interests={props.interests}
                        profile={Profile}
                        key={props} />
                ))
            }
        </React.Fragment>
    );
}