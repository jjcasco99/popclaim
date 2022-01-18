import './App.css';
// import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';

import {BrowserRouter} from 'react-router-dom';

function App() {
  const { isAunthenticated } = useAuth0();

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        {isAunthenticated ? (
          <>
            <Main />
          </>
          ):(
            <Login/>
          )}
        <Main />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
