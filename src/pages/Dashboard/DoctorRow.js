import React from "react";
import toast from "react-hot-toast";

const DoctorRow = ({ doctor, index, refetch, setDocForDelete }) => {
  const { img, name, specialty, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDocForDelete(doctor)}
          for="delete-confirm-modal"
          className="btn btn-xs btn-error"
        >
          DELETE
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
