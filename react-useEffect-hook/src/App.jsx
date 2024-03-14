import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.log("Test");
    console.log("New Count Added.....", count);
  }, [count]);

  function HandleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Hellloooo Use Effect!</h1>
      <h2>The current value is {count}</h2>
      <button onClick={HandleCount}>Add Value</button>
    </>
  );
}
