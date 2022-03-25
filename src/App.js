import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Homepage from "../src/components/Homepage";
import AboutUs from "./components/AboutUs";
import ViewBoard from "./components/ViewBoard";
import AddBoard from "./components/AddBoard";
import Board from "./components/Board";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AddTask from "./components/AddTask";
import View from "./components/View";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="bg-indigo-600 w-full ">
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="addboard" element={<AddBoard />} />
            <Route path="viewboard" element={<ViewBoard />} />
            <Route path="view" element={<View />} />
            <Route path="createdboard" element={<Board />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="addtask" element={<AddTask />} />
            <Route path="about" element={<AboutUs />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
