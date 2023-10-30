// first step importing the hooks
import React, { useCallback, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

const UseCallback = () => {
  // declaring useState variables for required entry
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(30000);

  //  click events for buttons
  // here using useCallback hook for stop the unnecessary re-renders.
  // useCallback nothing is function with dependency array

  const ageHandler = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const salaryHandler = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      {/* props are transformed to respectd components */}
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={ageHandler}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={salaryHandler}>Increment Salary</Button>
    </div>
  );
};

export default UseCallback;
