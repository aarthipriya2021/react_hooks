// first step importing the useRef() hook
import React, { useState, useRef } from "react";

const Reference = () => {

  // for state management, useing the useState() hook
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // second step the declaring the variable to useRef() for each element which we want
  const inputOneRef = useRef();
  const inputTwoRef = useRef();

  // manipulating or changing dom element using useRef() hook.
  const btnHandlerOne = () => {
    console.log(inputOneRef);
    // current value of that ref
    inputOneRef.current.style.backgroundColor = "Green";
    inputOneRef.current.style.color = "white";
  };

  const btnHandlerTwo = () => {
    console.log(inputTwoRef);
    inputTwoRef.current.style.backgroundColor = "red";
    inputTwoRef.current.style.color = "white";
  };
  return (
    <div>
      {/* adding the reference for dom element in corresponding elemented */}
      {/* We do not manipulate or change the ref in return  */}
      <h2>useRef Hook</h2>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
        // adding ref attribute to dom element
        ref={inputOneRef}
      />

      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="ms-3"
        ref={inputTwoRef}
      />
      <h3>Value is: {count}</h3>

      <button className="btn btn-success" onClick={btnHandlerOne}>
        Button_1
      </button>
      <button className="btn btn-danger ms-3" onClick={btnHandlerTwo}>
        Button_2
      </button>
    </div>
  );
};

const UseRef = () => {
  return (
    <div>
      <Reference />
    </div>
  );
};

export default UseRef;




// useState() hook useRef() hook almost opposite not entirely.
// useRef() hook - to store the reference of an element not an value. 
// useState() hook - to store the value of an element not an reference. 
// useRef() doesn't notify when content changes
// useState() is responsible for re-endering the particular dom element