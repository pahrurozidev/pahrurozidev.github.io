import React from "react";
import { Database } from "../../../utils/Database";

export default function Posts() {
    const database = Database();

    return (
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-1">
            {
                database.posts.map((post) => (
                    <img src={post.name} alt={post.name} />
                ))
            }
        </section>
    );
}