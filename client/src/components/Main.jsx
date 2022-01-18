import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Informe from './Informe';
import { Route, Routes } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

const Main = () => {
  const { isAunthenticated } = useAuth0();
  

  return (
    <div>
      <Dashboard />
      {/* <Routes>
        <Route path="/informe" element={<Informe />} />
      </Routes> */}
    </div>
  );
};
export default Main;
