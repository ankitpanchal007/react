import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

export default function Timer() {
    let [count, setcount] = useState(0);
    useEffect(() => {
        let timer = setTimeout(() => {
            setcount((count) => count + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return <h1>i have rendered {count} times</h1>
}

