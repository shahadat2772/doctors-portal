import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import DoctorRow from "./DoctorRow";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageDoctors = () => {
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const [docForDelete, setDocForDelete] = useState(null);

  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div className="m-6">
      <h2 className="text-2xl">Manage Doctors {doctors?.length}</h2>

      <div className="doctorsContainer">
        <div class="overflow-x-auto">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {doctors?.map((doctor, index) => (
                <DoctorRow
                  refetch={refetch}
                  key={doctor._id}
                  doctor={doctor}
                  index={index}
                  setDocForDelete={setDocForDelete}
                ></DoctorRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {docForDelete && (
        <DeleteConfirmModal
          refetch={refetch}
          setDocForDelete={setDocForDelete}
          docForDelete={docForDelete}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;
