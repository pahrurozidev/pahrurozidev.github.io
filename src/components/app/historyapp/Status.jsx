import React from "react";

export default function Status() {
    return (
        <section className="flex justify-between px-4 py-3 border">
            <div className="text-center">
                <h1 className="font-semibold">42</h1>
                <p>Posts</p>
            </div>
            <div className="text-center">
                <h1 className="font-semibold">3,423</h1>
                <p>Followers</p>
            </div>
            <div className="text-center">
                <h1 className="font-semibold">27</h1>
                <p>Following</p>
            </div>
        </section>
    );
}