import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Login from '../Components/Login'
import Dashboard from '../Components/Dashboard'
const Routing = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
};

export default Routing;


