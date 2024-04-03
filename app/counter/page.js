"use client";

import { useState } from "react";

export default function About() {
    const [count, setCount] = useState(0);
    console.log("This is counter page");
    return (
        <section>
            <h2>Counter</h2>
            <button onClick={() => setCount(count+1)}>Increment</button>
            {count}
        </section>
    );
}
