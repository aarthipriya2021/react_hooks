import React from "react";

const Button = ({ handleClick, children }) => {
  console.log("Rendering button - ", children);
  return <button onClick={handleClick}>{children}</button>;
};

// React.memo() - higher order component, performance optimization tool.
// If our func. component renders the same result given the same props, react will memoize , skip rendering the component, reuse the last rendered result
export default React.memo(Button);
