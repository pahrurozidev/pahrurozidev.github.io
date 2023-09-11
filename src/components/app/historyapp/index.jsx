import { Fragment, useState } from "react";
import Status from "./Status";
import Posts from "./Posts";
import Header from "./Header";
import Menu from "./Menu";
import Form from "./Form";

export default function Index() {
    const [showForm, setShowForm] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        // Add your logic for handling the confirm button click here
        alert('Confirmed!');
        closeModal();
    };

    const handleShowFormChange = (value) => {
        setShowForm(value)
    }

    const handleHideFormChange = (value) => {
        setShowForm(value)
    }

    return (
        <Fragment>
            <main class="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto mb-[105px] pt-10 font-inter border-slate-900 border-opacity-20">
                <Header />
                <Status />
                <Posts />
                <Menu onShowFormChange={handleShowFormChange} />
                {showForm && <Form onShowFormChange={handleHideFormChange} />}
            </main>
        </Fragment>
    )
}