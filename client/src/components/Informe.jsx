import React from 'react';
import Report from './Report';
import Header from './Header';
import './Informe.css';
import arrow from '../assets/caret--right.png';

const Informe = () => {
  return (
    <section className="global">
      <Header />
      <div>
        <div className="cabecera-informe">
          <h1>INFORME BASH</h1>
          <h2>
            Año/s 2022 <img src={arrow} alt="" />
          </h2>
          <h2>
            Mes/s Enero <img src={arrow} alt="" />
          </h2>
          <input type="submit" value="Descargar" id="download" />
        </div>
        <div>
          <Report />
        </div>
      </div>
    </section>
  );
};

export default Informe;
