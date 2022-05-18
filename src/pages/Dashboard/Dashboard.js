import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);

  console.log(user);

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
          {admin && (
            <>
              <li>
                <Link to={"users"}>All users</Link>
                <Link to={"addDoctor"}>Add a doctor</Link>
                <Link to={"manageDoctors"}>Manage Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
