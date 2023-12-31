import React, { useState, useMemo } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <div className="my-4 ">
        <button
          className="counterOne btn btn-secondary me-3"
          onClick={incrementOne}
        >
          Count One - {counterOne}
        </button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div className="">
        <button className="counterTwo btn btn-info" onClick={incrementTwo}>
          Count Two - {counterTwo}
        </button>
      </div>
    </div>
  );
};

export default Counter;
