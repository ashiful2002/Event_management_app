import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../Context/AuthContext";

const ProfileDropdown = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img src={user?.photoURL || "/default-avatar.png"} alt="Profile" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32 sm:w-52"
      >
        <li>
          <a onClick={() => navigate("/create-event")}>Create Event</a>
        </li>
        <li>
          <a onClick={() => navigate("/manage-events")}>Manage Events</a>
        </li>
        <li>
          <a onClick={() => navigate("/my-joined-events")}>My Joined Events</a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
