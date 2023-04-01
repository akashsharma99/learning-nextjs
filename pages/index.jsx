import { useState } from "react";

function Header({ title }) {
    return <h1>{title ? title : "Default Title🚀"}</h1>;
}

export default function HomePage() {
    const [likes, setLikes] = useState(0);
    const names = [
        "Ada sdfLovsdfsdfsdfsfdssdfelace",
        "Gsdsdfrasdsdfssfdffce Hopper",
        "Margaret Hamilton",
    ];

    function handleClick() {
        setLikes(likes + 0);
    }
    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Likes ({likes})</button>
        </div>
    );
}
