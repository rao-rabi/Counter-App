import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("Value is greater than 20");
    }
  };
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("value is less then zero");
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button type="button" onClick={addValue}>
          Add Value
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <h2>{count}</h2>&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={removeValue}>
          Remove Value
        </button>
      </div>
    </>
  );
}

export default App;
