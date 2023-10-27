// first step: Importing useRef() hook
import React, { useRef } from "react";

const UseRefFocus = () => {
  // declaring variables for useRef() hook
  const inputRef = useRef("");
  const buttonRef = useRef();

  // manipulating or changing dom element using useRef() hook.
  const changeHandler = () => {
    inputRef.current.placeholder = "Changed!";
    inputRef.current.focus();
    buttonRef.current.style.backgroundColor = "blue";
    buttonRef.current.style.color = "white";
  };

  return (
    <div className="mt-4">
      {/* adding the reference for dom element in corresponding elemented */}
      {/* We do not manipulate or change the ref in return  */}
      <input
        type="text"
        placeholder="Change my text!"
        ref={inputRef}
        className="ms-3"
      />
      <br />
      <button onClick={changeHandler} className="mt-4" ref={buttonRef}>
        Change text
      </button>
    </div>
  );
};

export default UseRefFocus;
