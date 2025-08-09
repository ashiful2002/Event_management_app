import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import NavbarEnd from "./NavbarEnd/NavbarEnd";
import logo from "../../../public/Sodev_logo.webp";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const links = (
    <div className="md:flex">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink to="/create-event">Create Event</NavLink>
          </li>
          <li>
            <NavLink to="/manage-events">Manage Event</NavLink>
          </li>
          <li>
            <NavLink to="/my-joined-events">My Events</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/upcoming-events">Upcoming Events</NavLink>
          </li>
        </>
      )}
    </div>
  );

  return (
    <>
      {/* Fixed Navbar */}
      <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              src={logo}
              alt="logo"
              className="w-[300px] md:w-[250px] -ml-32 md:-ml-16"
            />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <NavbarEnd />
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
