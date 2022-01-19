import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Informe from './Informe';
import Cookies from './Cookies';
import Privacidad from './Privacidad';
import Avisolegal from './Avisolegal';
import { Route, Routes } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

const Main = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}

        <Route path="/informe" element={<Informe />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/aviso-legal" element={<Avisolegal />} />
      </Routes>
    </div>
  );
};
export default Main;
