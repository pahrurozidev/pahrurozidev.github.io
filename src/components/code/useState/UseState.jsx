import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

export default function UseState() {
    const [code, setCode] = useState(`import React, { useState } from 'react';

export default function UseState() {

    const [color, setColor] = useState({
        color1: 'yellow',
        color2: 'blue',
        color3: 'red',
        color4: 'orange'
    });

    const updateColor = () => {
        setColor((prevColor) => {
            return { ...prevColor, color1: 'black' };
        })
    }

    return (
        <React.Fragment>
            <h1>This is a {color.color1} color</h1>
            <button
                type="button"
                onClick={updateColor}>Change Color</button>          
        </React.Fragment>
    );
}`);

    const [color, setColor] = useState({
        color1: 'yellow',
        color2: 'blue',
        color3: 'red',
        color4: 'orange'
    });

    const updateColor = () => {
        setColor((prevColor) => {
            return { ...prevColor, color1: 'black' };
        })
    }

    return (
        <section className='w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2 m-auto font-quicksand mt-10 sm:mt-24'>
            <h1 className='text-sm font-semibold'>useState Hook</h1>
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
            <div className='mt-[20px]'>
                <h1 className='text-sm font-semibold'>Result</h1>
                <h2 className="text-sm mt-3">This is a <span className='font-semibold'>{color.color1}</span> color</h2>
                <button
                    type="button"
                    className="border border-stone-500 rounded-lg shadow-lg px-4 py-1 text-sm mt-3"
                    onClick={updateColor}>Change Color</button>
            </div>
        </section>
    );
}

