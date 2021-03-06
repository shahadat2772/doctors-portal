import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import MyReview from "./pages/Dashboard/MyReview";
import Users from "./pages/Dashboard/Users";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Navber from "./pages/Shared/Navber/Navber";
import RequireAdmin from "./pages/Login/RequireAdmin/RequireAdmin";
import AddDoctor from "./pages/Dashboard/AddDoctor";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";
import Payment from "./pages/Dashboard/Payment";

function App() {
  return (
    <div className="max-w-7xl mx-auto md:px-8">
      <Navber></Navber>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>

        {/* Nested Route */}

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route
            index
            path="myAppointments"
            element={<MyAppointments></MyAppointments>}
          ></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>

          <Route path="myReviews" element={<MyReview></MyReview>}></Route>

          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>

          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>

          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors></ManageDoctors>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      {/* Common toaster */}
      <Toaster></Toaster>
    </div>
  );
}

export default App;
