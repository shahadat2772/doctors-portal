import React from "react";
import { NavLink } from "react-router-dom";
import "./Navber.css";

const Navber = () => {
  // Menu items
  const menuItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeRoute" : "")}
          to={`/home`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeRoute" : "")}
          to={`/about`}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeRoute" : "")}
          to={`/appointment`}
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeRoute" : "")}
          to={`/reviews`}
        >
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeRoute" : "")}
          to={`/contactUs`}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeRoute" : "")}
          to={`/login`}
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base md:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navber;
