import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../../Context/AuthContext";
import ProfileDropdown from "./ProfileDropDown";
import ThemeToggle from "./ThemeToggle";
import Swal from "sweetalert2";

const NavbarEnd = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    Swal.fire({
      title: "Do you want to sign out?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, sign out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire("signed out");
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div>
      {user && <ProfileDropdown user={user} />}
      {user ? (
        <button
          onClick={handleSignOut}
          className="btn ml-2 btn-outline btn-primary"
        >
          Sign Out
        </button>
      ) : (
        <Link to="/signin" className="btn ml-2 btn-outline btn-primary">
          Signin
        </Link>
      )}
    </div>
  );
};

export default NavbarEnd;
