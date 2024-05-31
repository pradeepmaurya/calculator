import React, { useState } from "react";
import "./calculator.css";
function Calculator() {
  const [result, setResult] = useState("");

  const setValue = (event) => {
    setResult(result.concat(event.target.value));
  };
  const resolve = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const deleteChar = () => {
    setResult(result.substring(0, result.length - 1));
  };

  const clearResult = () => {
    setResult("");
  };
  return (
    <div className="main">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="buttons">
        <button className="clear cut-btn" onClick={clearResult}>
          AC
        </button>
        <button className="cut-btn" onClick={deleteChar}>C</button>
        <button className="operation-btn" onClick={setValue} value={"/"}>
          /
        </button>

        <button onClick={setValue} value={7}>
          7
        </button>
        <button onClick={setValue} value={8}>
          8
        </button>
        <button onClick={setValue} value={9}>
          9
        </button>
        <button className="operation-btn" onClick={setValue} value={"*"}>
          X
        </button>

        <button onClick={setValue} value={4}>
          4
        </button>
        <button onClick={setValue} value={5}>
          5
        </button>
        <button onClick={setValue} value={6}>
          6
        </button>
        <button className="operation-btn" onClick={setValue} value={"-"}>
          -
        </button>

        <button onClick={setValue} value={1}>
          1
        </button>
        <button onClick={setValue} value={2}>
          2
        </button>
        <button onClick={setValue} value={3}>
          3
        </button>
        <button className="operation-btn" onClick={setValue} value={"+"}>
          +
        </button>

        <button className="zero" onClick={setValue} value={0}>
          0
        </button>
        <button onClick={setValue} value={"."}>
          .
        </button>
        <button className="operation-btn" onClick={resolve}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
