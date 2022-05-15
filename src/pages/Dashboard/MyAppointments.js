import React, { useEffect, useState } from "react";

import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import { tr } from "date-fns/locale";

const MyAppointments = () => {
  const [user, loading] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);

  const email = user?.email;

  useEffect(() => {
    if (loading) {
      return <Loading></Loading>;
    }
    if (user) {
      fetch(`http://localhost:5000/bookings?email=${email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl">My appointments</h2>

      <div class="overflow-x-auto">
        <table class="table w-full mt-4">
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
            {appointments.map((appointment, index) => (
              <tr>
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
