import React, {useContext} from "react";
import { AppContext } from "../../App_hook";
import ChangeProfileName from "./ChangeProfileName";

const Profile = () => {

  const {userName} = useContext(AppContext)
  return (
    <div>
      <h2>
        This is the profile Page and the profile name is {userName}{" "}
      </h2>
      {/* Second step using props and sending to changeProfile comp. because we have to change the profile name there comp. */}
      <ChangeProfileName/>
    </div>
  );
};

export default Profile;
