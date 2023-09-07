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

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new document in the "pahrurozi" collection
        try {
            const currentDate = new Date(); 
            const formattedDate = currentDate.toISOString();

            const docRef = await addDoc(collection(firestore, "pahrurozi"), {
                url: title,
                name: content,
                place: 'West Nusa Tenggara',
                created_by: 'Pahrurozi',
                created_date: formattedDate,
            });

            console.log("Document written with ID: ", docRef.id);

            // Clear the form fields after successful submission
            setTitle("");
            setContent("");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Fragment>
            <div className="mb-3">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Url: </label>
                        <input className="bg-purple-300" type="text" value={title} onChange={handleTitleChange} required />
                    </div>
                    <div>
                        <label>Name: </label>
                        <input className="bg-orange-300" value={content} onChange={handleContentChange} required />
                    </div>
                    <button type="submit" className="bg-red-400 px-3 text-white">Add Post</button>
                </form>
            </div>

            <section className="grid grid-cols-2 sm:grid-cols-3 gap-[2px]">
                {
                    posts.map((post) => (
                        <Link to={`/app/historyapp/${post.id}`}>
                            <img src={`https://raw.githubusercontent.com/pahrurozidev/pahrurozidev.github.io/posts/public/posts/${post.url}`} key={post.id} alt={post.name} />
                        </Link>
                    ))
                }
            </section>
        </Fragment>
    );
}