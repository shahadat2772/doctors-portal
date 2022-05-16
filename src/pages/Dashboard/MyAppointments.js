import React, { useEffect, useState } from "react";

import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const MyAppointments = () => {
  // Navigator
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);

  const email = user?.email;

  useEffect(() => {
    if (loading) {
      return <Loading></Loading>;
    }
    if (user) {
      fetch(
        `https://evening-shelf-54742.herokuapp.com/bookings?email=${email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log("RES", res);
          if (res.status === 401 || res.status === 403) {
            window.localStorage.removeItem("accessToken");
            signOut(auth);
            navigate("/home");
          } else {
            return res.json();
          }
        })
        .then((data) => setAppointments(data));
    }
  }, []);
  return (
    <div>
      <h2 className="text-2xl">My appointments</h2>

      <div className="overflow-x-auto">
        <table className="table w-full mt-4">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
