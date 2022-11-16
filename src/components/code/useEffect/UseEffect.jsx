import React, { useState, useEffect } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

export default function UseEffect() {
    const [code, setCode] = useState(`import React, { useState, useEffect } from 'react';

export default function UseState() {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0)';

    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count])

    return (
        <React.Fragment>
            <h1 className='font-semibold'>Result</h1>
            <p>This is a count with value {count}</p>
            <p>This is a calculation with value {calculation}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </React.Fragment>
    );
}`);

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count])

    return (
        <section className='w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto font-quicksand mt-10 sm:mt-24'>
            <h1 className='text-sm font-semibold'>useEffect Hook</h1>
            <span className='text-[11px] block'>Upload Aug 27, 2022</span>

            <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    marginTop: '20px',
                    position: 'relative',
                    zIndex: '-10px',
                }}
            />

            <div className='mt-[20px] text-sm'>
                <h1 className='font-semibold'>Result</h1>
                <p className="mt-3">This is a count with value {count}</p>
                <p className="mt-3">This is a calculation with value {calculation}</p>
                <button
                    onClick={() => setCount((c) => c + 1)}
                    className="border px-4 py-2 shadow-lg mt-3">+</button>
            </div>
        </section>
    );
}