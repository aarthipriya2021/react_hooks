import React from "react";
import ChangeProfileName from "./ChangeProfileName";

const Profile = (props) => {
  return (
    <div>
      <h2>
        This is the profile Page and the profile name is {props.userName}{" "}
      </h2>
      {/* Second step using props and sending to changeProfile comp. because we have to change the profile name there comp. */}
      <ChangeProfileName setUserName={props.setUserName} />
    </div>
  );
};

export default Profile;
