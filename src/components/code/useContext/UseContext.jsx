import React, { useState, useContext, createContext } from "react";

const UserContext = createContext();

function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}

function Component4() {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    );
}

function Component3() {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    );
}

function Component2() {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    );
}

function UseContext() {
    const [user, setUser] = useState('Pahrurozi');
    return (
        <section className='w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto font-quicksand mt-10 sm:mt-24'>
            <h1 className='text-sm font-semibold'>useContext Hook</h1>
            <span className='text-[11px] block'>Upload Aug 27, 2022</span>

            {/*  */}

            <div className='mt-[20px] text-sm'>
                <h1 className='font-semibold'>Result</h1>
                <UserContext.Provider value={user}>
                    <h1>Hello {user}</h1>
                    <Component2 />
                </UserContext.Provider>
            </div>
        </section>
    );
}

export default UseContext;