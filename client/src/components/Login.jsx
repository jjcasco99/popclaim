import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="login-btn" onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
};

export default Login;
