"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dogs() {
    const [breeds, setBreeds] = useState("");
    const getBreeds = async () => {
        try {
            const response = await fetch("https://dog.ceo/api/breeds/list/all");
            const { message } = await response.json();
            setBreeds(message);
        } catch (error) {
            console.log(error);
        } finally {
            
        }
    };
    useEffect(() => {
        getBreeds();
    }, []);
  return (
    <section>
      <h2>Dog breeds</h2>
      {/* <button onClick={getBreeds}>Show breeds</button> */}
      <ul>
        {Object.keys(breeds).map(breed => <li key={breed}>{breed}</li>)}
      </ul>
      <Link href="/">Home</Link>
      
    </section>
  );
}
