import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  // user ? <div>welcome {user.username}</div> : <div>please login!!!!</div>;
  if (!user) return <div>please login!!!!</div>;
  return <div>welcome {user.username}</div>;
}

export default Profile;
