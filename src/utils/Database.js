const Database = () => {
    return {
        navbar: [
            {
                brand: [
                    { name: 'Pahrurozi' }
                ],
                items: [
                    {
                        name: "Home",
                        link: '/'
                    },
                    {
                        name: "Code",
                        link: '/#/code'
                    },
                ]
            }
        ],
        home: [
            {
                brand: { name: 'Pahrurozi' },
                tags: [
                    { name: "pahrurozi" },
                    { name: "Lombok" },
                    { name: "Web Developer" }
                ],
                desc: { name: 'Hi there!👋 Welcome to my profile. Nice to meet you! My name is Pahrurozi. I\'m a web developer focused on creating great web experiences. Coding has been my passion since I started working with computers. I enjoy to create beautifully designed, intuitive and functional websites' },
                interests: [
                    { name: 'Frontend Developer' },
                    { name: 'React Developer' },
                    { name: 'Node Js' },
                    { name: 'Laravel Developer' },
                    { name: 'Web Developer' }
                ],
            }
        ],
        techStuck: [
            { name: 'HTML 5' },
            { name: 'CSS 3' },
            { name: 'Javascript' },
            { name: 'PHP' },
        ],
        experiences: [
            {
                position: "Fullstack Web Developer Student",
                company: 'Binar Academy',
                period: 'Aug 2022 - Persent · 2 month',
                companyIcon: './binar.png',
                link: 'https://www.binaracademy.com/',
            },
            {
                position: "Web Developer Intern",
                company: 'Citrust Sari Indonesia',
                period: 'Jun 2022 - Sep 2022 · 3 month',
                companyIcon: './citrust.png',
                link: 'https://citrustindonesia.com/',
            },
            {
                position: "Frontend Web and Backend Developer Student",
                company: 'Dicoding Indonesia',
                period: 'Feb 2022 - Jul 2022 · 6 month',
                companyIcon: './dicoding.png',
                link: 'https://dicoding.com/',
            },
        ],
        badges: [
            {
                name: 'Frontend Expert Certificate',
                link: 'https://www.dicoding.com/certificates/1RXYM4GRMXVM',
                image: './FEExpert.webp',
            }
        ],
        proyek: [
            {
                name: 'Sipantas App',
                period: 'Jun 2022 - Jul 2022 · 1 month',
                link: 'http://sipantas.herokuapp.com/',
                tech: [
                    { name: 'Laravel' },
                    { name: 'Bootstrap' },
                ]
            },
            {
                name: 'Personal Portfolio',
                period: 'Aug 2022 - Present · 1 month',
                link: 'https://pahrurozidev.github.io/',
                tech: [
                    { name: 'React' },
                    { name: 'Tailwind' },
                ]
            },
        ],
        footer: [
            {

            }
        ],
        code: [
            {
                title: 'useState',
                created: 'Aug 26, 22',
                link: 'useState',
                code: `import React, { useState } from 'react';

export default function UseState() {
    const [code, setCode] = useState();

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
            <h1>This is a "{color.color1}" color</h1>
            <button
                type="button"
                onClick={updateColor}>Change Color</button>          
        </React.Fragment>
    );
}`
            },
            {
                title: 'useEffect',
                created: 'Aug 26, 22',
                link: 'useEffect',
            },
            {
                title: 'useContext',
                created: 'Aug 30, 22',
                link: 'useContext',
            },
            {
                title: 'useRef',
                created: 'Aug 26, 22',
                link: 'useRef',
            },
            {
                title: 'useReducer',
                created: 'Aug 26, 22',
                link: 'useReducer',
            },
            {
                title: 'useCallback',
                created: 'Aug 26, 22',
                link: 'useCallback',
            },
            {
                title: 'Custom Hooks',
                created: 'Aug 26, 22',
                link: 'Custom Hooks',
            },
        ]
    }
}

export { Database };