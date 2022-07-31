import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Devs from "./components/Devs";


function App() {
  return (
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/devs" element={<Devs />}></Route>
          {/* <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/devs/:devId" element={<Profile />}></Route> */}
        </Routes>
      </Router>
  );
}

export default App;
