import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { NavLink, useNavigate } from "react-router";
import Social from "./Social";

const Footer = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <div className="space-y-3 ">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink to="/upcoming-events">Upcoming Events</NavLink>
          </li>
          <li>
            <NavLink to="/create-event">Create Event</NavLink>
          </li>
          <li>
            <NavLink to="/manage-events">Manage Event</NavLink>
          </li>
          <li>
            <NavLink to="/my-joined-events">My Joined Events</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/upcoming-events">Upcomming Events</NavLink>
          </li>
        </>
      )}
    </div>
  );
  return (
    <div className="">
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 flex justify-between">
        <>
          <aside>
            <div className="text-xl font-bold">
              <span className="text-violet-500">SO</span>
              <span className="text-amber-500">DEV</span>
            </div>
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://ashiful-islam.vercel.app/" className="link">
                Ashiful Islam
              </a>{" "}
              | All right preserved
            </p>
          </aside>
          <ul className="flex items-center gap-4">{links}</ul>
          <aside>
            <Social />
          </aside>
        </>
      </footer>
    </div>
  );
};

export default Footer;
