import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Contests from "./Contests";
import Navbar from "../components/Navbar";
import NewProblem from "./NewProblem";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<Dashboard />} />
      <Route path="/user/problems/new" element={<NewProblem />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Signup />} />
      <Route
        path="/contests"
        element={
          <>
            <Navbar />
            <Contests />
          </>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
