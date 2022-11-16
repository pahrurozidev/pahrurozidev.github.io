import React, { useState, useRef, useEffect } from "react";

export default function UseRef() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <section className='w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto font-quicksand mt-10 sm:mt-24'>
            <input
                className="border"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </section>
    );
}