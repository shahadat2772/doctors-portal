import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navber from "./pages/Shared/Navber/Navber";

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
