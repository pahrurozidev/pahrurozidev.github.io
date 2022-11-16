import React from "react";
import { Database } from "../utils/Database";
import Home from "../components/home/Home";
import TechStuck from "../components/techStuck/TechStuck";
import Experiences from "../components/experiences/Experiences";
import Badges from "../components/badges/Badges";
import Proyek from "../components/proyek/Proyek";
import Menu from "../components/menu/Menu";

export default function Main() {
    const database = Database();

    return (
        <React.Fragment>
            <main>
                <Home home={database.home} />
                <TechStuck techStucks={database.techStuck} />
                <Experiences experiences={database.experiences} />
                <Badges badges={database.badges} />
                <Proyek proyek={database.proyek} />
                <Menu />
            </main>
        </React.Fragment>
    );
}
