import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import NavbarEnd from "./NavbarEnd/NavbarEnd";
import ThemeToggle from "./NavbarEnd/ThemeToggle";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      
      <li>
        <NavLink to="/upcoming-events">Upcomming Events</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <span className="text-violet-500 -mr-1.5">SO</span>
          <span className="text-amber-500">DEV</span>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavbarEnd />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
