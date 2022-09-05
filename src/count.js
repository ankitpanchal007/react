import React, { useState } from 'react';

export default function Example() {

    const [count, setCount] = useState(0);
    let sub = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <p>Number is {count} </p>
            <button onClick={() => setCount(count + 1)}>
                Click To Increase
            </button>
            <button onClick={sub}>
                Click To Decrease
            </button>
        </div>
    );
}