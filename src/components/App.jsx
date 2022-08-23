import React from "react";
import { Database } from "../utils/Database";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import TechStuck from "./techStuck/TechStuck";
import Experiences from "./experiences/Experiences";
import Badges from "./badges/Badges";
import Proyek from "./proyek/Proyek";
import Footer from "./footer/Footer";

export default function App() {
    const database = Database();

    return (
        <React.Fragment>
            <Navbar navbar={database.navbar} />
            <main>
                <Home home={database.home} />
                <TechStuck techStucks={database.techStuck} />
                <Experiences experiences={database.experiences} />
                <Badges badges={database.badges} />
                <Proyek />
            </main>
            <Footer footer={database.footer} />
        </React.Fragment>
    );
}