import './App.css';
// import Header from './components/Header';
import Main from './components/Main';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Main />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
