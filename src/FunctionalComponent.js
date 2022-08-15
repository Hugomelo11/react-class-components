import React from "react"
import { useState, useEffect } from "react";

function FunctionalComponent() {

    const [count, setCount] = useState(1);
    const [coffee, setCoffee] = useState([])
    // const addClick = () => setCount(counter + 1);

    useEffect(()=> {
        let url = "https://api.sampleapis.com/coffee/hot";
    fetch(url) // fetching data from url
      .then((res) => res.json()) // transfering data into json
      .then(data => {
        // do something with data
        setCoffee(data)
      })
     }, [])

    return (
        <>
        <h2>OMG this is so functional {count}</h2>
        <button onClick={() => {
            setCount(count + 1)
        }}>Add One</button>
        {coffee.map (
            coffee => <h1 key={coffee.id}>{coffee.title}</h1>
        )}
        </>
    )
}

export default FunctionalComponent