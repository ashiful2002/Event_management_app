import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../Context/AuthContext";
import ProfileDropdown from "./ProfileDropDown";
import ThemeToggle from "./ThemeToggle";

const NavbarEnd = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {user && <ProfileDropdown user={user} />}
      {user ? (
        <button onClick={handleSignOut} className="btn ml-2">
          Sign Out
        </button>
      ) : (
        <Link to="/signin" className="btn ml-2">
          Signin
        </Link>
      )}
    
    </div>
  );
};

export default NavbarEnd;
