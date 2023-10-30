import React from "react";

const Count = ({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
};
// React.memo() - higher order component, performance optimization tool.
// If our func. component renders the same result given the same props, react will memoize , skip rendering the component, reuse the last rendered result
export default React.memo(Count);
