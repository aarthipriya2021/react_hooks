import React, { useState, useContext } from "react";
import { AppContext } from "../../App_hook";


const ChangeProfileName = () => {
  // Using useState to manage state when update the username within the component or page.
  const [newUserName, setNewUserName] = useState("");

  const {setUserName} = useContext(AppContext);
  return (
    <div>
      <h3>Here you can change your profile name!!</h3>
      {/* Third Step:  In input u are setting the new entry ,so that here using setstate of this component. */}
      <input onChange={(e) => setNewUserName(e.target.value)} />
      {/* Forth Step: Here you are setting the new entry within the whole app, so we are setting the props with new username */}
      <button onClick={() => setUserName(newUserName)}>
        Change Name
      </button>
    </div>
  );
};

export default ChangeProfileName;
