import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "./Logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div class="flex items-center">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Logout />
      </div>
    )
  );
};

export default Profile;
