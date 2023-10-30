import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return <h2>Title</h2>;
};
// React.memo() - higher order component, performance optimization tool.
// If our func. component renders the same result given the same props, react will memoize , skip rendering the component, reuse the last rendered result
export default React.memo(Title);
