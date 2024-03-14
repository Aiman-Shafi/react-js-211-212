import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  //   console.log(setCount);
  //   setCount(40);
  function increaseCount() {
    setCount(count + 20);
  }

  function decreaseCount() {
    setCount(count - 5);
  }

  //   increaseCount();

  return (
    <div className="counter">
      <h2>{count}</h2>
      <button onClick={increaseCount}>Add Count Value</button>
      <button onClick={decreaseCount}>Remove Count Value</button>
    </div>
  );
}
