import React, { useState } from "react";
import firestore from '../../../utils/firebase'
import { collection, getFirestore, onSnapshot, addDoc } from 'firebase/firestore';

export default function Form({ onShowFormChange }) {
    const [src, setSrc] = useState("");
    const [alt, setAlt] = useState("");
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");
    const [pin, setPin] = useState("");

    const handleCancelButtonClicked = () => {
        onShowFormChange(false)
    }

    const handleSubmitButton = async () => {
        try {
            const currentDate = new Date();
            const formattedDate = currentDate.toISOString();

            if (pin != 123) {
                alert('Your PIN is Wrong')
            } else {
                const docRef = await addDoc(collection(firestore, "pahrurozi"), {
                    src: src,
                    alt: alt,
                    place: place,
                    description: description,
                    created_by: 'Pahrurozi',
                    created_date: formattedDate,
                });

                setSrc("");
                setAlt("");
                setPlace("");
                setDescription("");
                setPin("");
                onShowFormChange(false)
            }
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    return (
        <section>
            <div className="fixed inset-0.5 flex items-center justify-center z-50">
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content">
                        <div className="modal-header flex justify-between border px-3 py-2">
                            <h3 className="text-sm font-semibold">Add Posts</h3>
                        </div>
                        <div className="modal-body px-4 text-sm mt-3">
                            <form action="">
                                <div className="flex flex-col">
                                    <label>Src</label>
                                    <input class="resize-none border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500 mt-1" type="text" value={src} onChange={(e) => setSrc(e.target.value)} placeholder="Enter your src" required />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label>Alt</label>
                                    <input class="resize-none border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500 mt-1" value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="Enter your alt" required />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label>Place</label>
                                    <input class="resize-none border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500 mt-1" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Enter your place" required />
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label>Image</label>
                                    <a href="https://github.com/pahrurozidev/pahrurozidev.github.io/upload/posts/public/posts" target="_blank">
                                        <div className="w-full border opacity-50 rounded-md mt-1 flex">
                                            <div className="bg-slate-200 px-3 p-2 rounded-l-md">Choose File</div>
                                            <div className="p-2">No file chosen</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label>Description</label>
                                    <textarea class="resize-none border rounded-md p-2 w-full h-24 focus:outline-none focus:ring focus:border-blue-500 mt-1" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter your description"></textarea>
                                </div>
                                <div className="flex flex-col mt-2">
                                    <label>Pin</label>
                                    <input type="password" class="resize-none border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500 mt-1" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter your PIN" required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer mt-5 flex gap-2 w-full text-sm float-right p-3">
                            <button class="resize-none border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500" onClick={(e) => handleSubmitButton(e)}>
                                Submit
                            </button>
                            <button class="resize-none border rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500" onClick={() => handleCancelButtonClicked()}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}