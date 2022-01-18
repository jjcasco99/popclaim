import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Informe from './Informe';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/informe" element={<Informe />} />
      </Routes>
    </div>
  );
};
export default Main;
