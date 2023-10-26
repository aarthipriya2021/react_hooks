// importing useContext
import React, {useContext} from "react";
import { AppContext } from "../../App_hook";

//  Second step : Here you get props as argument and use it as denoted by "props.sentProps", otherwise you'll get an error.
const Home = () => {

  // getting props from store(App_Hook) component
const {userName} = useContext(AppContext)  
  return (
    <div>
      {/* we dont't need to add "props" word here, because we are taking props from global store */}
      <h2>This is the Home Page and the user is {userName}</h2>
    </div>
  );
};

export default Home;
