import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile mt-10">
      <input
        id=" dashboard-sidebar"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor=" dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
          {/* Sidebar content here  */}
          <li>
            <Link to={"myAppointments"}>My Appointments</Link>
          </li>
          <li>
            <Link to={"myReviews"}>My Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
