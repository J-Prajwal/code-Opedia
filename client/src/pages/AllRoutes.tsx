import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:username" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
