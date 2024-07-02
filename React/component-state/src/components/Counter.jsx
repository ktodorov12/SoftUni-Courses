import { useState } from "react";

export default function Counter() {
  const [click, setClick] = useState(0);

  function clickUp() {
    setClick(click + 1);
  }

  function resetClicker() {
    setClick(0);
  }

  function clickDown() {
    setClick(click - 1);
  }

  return (
    <>
      <h2>Clicks Counter</h2>
      <h4>Times clicked: {click}</h4>

      {click > 0 && <button onClick={clickDown}>-</button>}
      <button onClick={resetClicker}>0</button>
      <button onClick={clickUp}>+</button>
    </>
  );
}
