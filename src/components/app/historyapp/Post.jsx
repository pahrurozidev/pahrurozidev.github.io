import React, { Fragment, useEffect, useState } from "react";
import firestore from '../../../utils/firebase'
import { collection, getFirestore, onSnapshot, addDoc } from 'firebase/firestore';
import { Database } from '../../../utils/Database';
import { useParams } from "react-router-dom";
import Pahrurozi from '../../../assets/pahrurozi.webp';
import { FcLike } from 'react-icons/fc';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFillChatFill } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';

export default function Post() {
    const { id } = useParams();
    const database = Database();
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        console.log(posts);

        if (posts.length > 0) {
            const getPostById = posts.filter((post) => post.id == id);
            setPost(...getPostById);
            setLoading(false);
        }
    });

    const inputDate = new Date(post.created_date);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    const day = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    const formattedDate = `${dayOfWeek}, ${day} ${month}, ${year}`;

    return (
        <Fragment>
            {loading ?
                <div className="mt-12">Loading</div> :
                <section className="mt-12">
                    {post ? (
                        <div>
                            {console.log(post)}
                            <div className="flex items-center gap-2 px-3">
                                <img src={Pahrurozi} className="rounded-full w-8 h-8" alt="" />
                                <div>
                                    <h1 className="text-[12px] font-semibold">{post.created_by}</h1>
                                    <p className="text-[10px]">{post.place}</p>
                                </div>
                            </div>
                            <img src={`https://raw.githubusercontent.com/pahrurozidev/pahrurozidev.github.io/posts/public/posts/${post.src}`} className="my-2" alt={post.alt} />
                            <div className="px-3">
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <FcLike />
                                        <BsFillChatFill />
                                        <FaTelegramPlane />
                                    </div>
                                    <BsBookmark />
                                </div>
                                <small>{formattedDate}</small>
                            </div>
                        </div>
                    ) : (
                        <div>Post not found</div>
                    )}
                </section>
            }
        </Fragment>
    );
}
