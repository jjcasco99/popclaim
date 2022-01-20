import React from 'react';
import Report from './Report';
import Header from './Header';
import './Informe.css';
import arrow from '../assets/caret--right.png';
import Datosdelinforme from './Datosdelinforme';
import Comparativadeinformes from './Comparativadeinformes';

import { useAuth0 } from '@auth0/auth0-react';

const Informe = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <section className="global">
        <Header />
        <div>
          <div className="cabecera-informe">
            <div className="cabecera-flex">
              <div className='cabecera-flex2'>
                <h1>INFORME SAMSUNG</h1>
                <h2>
                  Año/s 2022 <img src={arrow} alt="" />
                </h2>
                <h2>
                  Mes/s Enero <img src={arrow} alt="" />
                </h2></div>
              <input type="submit" value="Descargar" id="download" />
            </div>
          </div>
          <div className="report-flex">
            <Report />
            <div>
              <Datosdelinforme />
              <Comparativadeinformes />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Informe;
