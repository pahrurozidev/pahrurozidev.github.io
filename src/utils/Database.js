const Database = () => {
    return {
        navbar: [
            {
                brand: [
                    { name: 'Pahrurozi' }
                ],
                items: [
                    { name: "Home" },
                    { name: "Code" },
                ]
            }
        ],
        home: [
            {
                brand: { name: 'Pahrurozi' },
                tags: [
                    { name: "pahrurozi" },
                    { name: "Lombok" },
                    { name: "Frontend Developer" }
                ],
                desc: { name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At omnis nemo reprehenderit rem labore fugit nihil architecto doloribus, neque ea voluptates alias veniam quia cum quaerat amet in porro beatae iure quas cumque animi, necessitatibus impedit inventore.' },
                interests: [
                    { name: 'Frontend Developer' },
                    { name: 'React Developer' },
                    { name: 'Node Js' },
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
                name: "Web Developer",
                period: 'Juni'
            }
        ],
        badges: [
            {

            }
        ],
        footer: [
            {

            }
        ],
    }
}

export { Database };