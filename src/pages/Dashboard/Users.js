import React from "react";
import { useQuery } from "react-query";
import Loading from "../../pages/Shared/Loading/Loading";
import UserRow from "./UserRow";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      headers: {
        authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        window.localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("login");
        return;
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(users);

  return (
    <div>
      <h2 className="text-2xl text-accent">This is all users</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {users?.map((user, index) => (
              <UserRow refetch={refetch} key={index} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
