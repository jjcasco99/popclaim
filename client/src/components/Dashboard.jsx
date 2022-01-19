import React from 'react';
import './Dashboard.css';
import arrow from '../assets/caret--right.png';
import Reputation from './Reputation';
import Keywords from './Keywords';
import Cardlist from './Cardlist';
import Header from './Header';

// Sustituir esta data por la petición axios:
import tweets from '../utils/data/csvjson.json';

import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="dashboard">
        <Header />
        <div>
          <section className="cabecera-dashboard">
            <div className="cabecera-flex">
              <h1 className="cabecera-titulo">REPUTACIÓN BASH</h1>
              <h2 className="cabecera-año">
                Año/s 2022 <img src={arrow} alt="" />
              </h2>
              <h2 className="cabecera-mes">
                Mes/s Enero <img src={arrow} alt="" />
              </h2>
            </div>
            <div className="cabecera-flex">
              <input type="submit" value="Actualizar datos" id="data" />
              <input type="submit" value="Generar informe" id="create-inform" />
            </div>
          </section>
          <div className="flex-container">
            <section>
              <Reputation />
              <Keywords />
            </section>
            <section>
              <Cardlist tweets={tweets} />
            </section>
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
