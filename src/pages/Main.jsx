import React from "react";
import { Database } from "../utils/Database";
import Home from "../components/home/Home";
import TechStuck from "../components/techStuck/TechStuck";
import Experiences from "../components/experiences/Experiences";
import Badges from "../components/badges/Badges";
import Proyek from "../components/proyek/Proyek";
import Menu from "../components/menu/Menu";
import Firework from "../components/firework_effect/Index";

export default function Main() {
    const database = Database();

    return (
        <React.Fragment>
            <main style={{ color: 'white', position: 'relative', zIndex: 2 }}>
                <Home home={database.home} />
                <TechStuck techStucks={database.techStuck} />
                <Experiences experiences={database.experiences} />
                <Badges badges={database.badges} />
                <Proyek proyek={database.proyek} />
                <Menu />
            </main>
            <Firework style={{ position: 'fixed', top: 0, left: 0, zIndex: 2, }} />
        </React.Fragment>
    );
}
