import React, { Fragment, useEffect, useState } from "react";
import firestore from '../../../utils/firebase'
import { collection, getFirestore, onSnapshot, addDoc } from 'firebase/firestore';
import { Link } from "react-router-dom";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const collectionRef = collection(firestore, "pahrurozi");

        // Use onSnapshot to listen to real-time updates
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            const newData = [];
            snapshot.forEach((doc) => {
                newData.push({ id: doc.id, ...doc.data() });
            });
            setPosts(newData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Fragment>
            <section className="grid grid-cols-2 sm:grid-cols-3 gap-[2px]">
                {posts.map((post) => (
                    <Link to={`/app/historyapp/${post.id}`}>
                        <img src={`https://raw.githubusercontent.com/pahrurozidev/pahrurozidev.github.io/posts/public/posts/${post.src}`} className="w-full h-[94px] bg-contain bg-no-repeat" key={post.id} alt={post.alt} />
                    </Link>
                ))}
            </section>
        </Fragment>
    );
}