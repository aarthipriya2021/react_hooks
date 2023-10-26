import React from "react";

//  Second step : Here you get props as argument and use it as denoted by "props.sentProps", otherwise you'll get an error.
const Home = (props) => {
  return (
    <div>
      <h2>This is the Home Page and the user is {props.userName}</h2>
    </div>
  );
};

export default Home;
