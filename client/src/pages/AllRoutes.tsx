import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Signup from './Signup';
import Contests from './Contests';
import Navbar from '../components/Navbar';
import NewProblem from './NewProblem';
import Login from './Login';
import MyProblems from './MyProblems';
import Dashboad from './Admin/Dashboad';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-problems" element={<MyProblems />} />
      <Route path="/user/:username" element={<Dashboard />} />
      <Route path="/user/problems/new" element={<NewProblem />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboad />} />
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
