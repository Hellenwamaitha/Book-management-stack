import React from "react";
import "../style/App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./SignUp";
import Registration from "./Login";
import BookAppointment from "./Favorite";
import HospitalCards from "./Category"
import HospitalCards from "./Profile"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutus" element={<SignUp />}/>
        <Route path="/contactus" element={<Login />}/>
        <Route path="/hospital" element={<Favorite />}/>
        <Route path="/signup" element={<Category />}/>
        <Route path="/booking" element={<Profile/>}/>
      </Routes>
      </Router>
    </div>
  );
}
export default App;