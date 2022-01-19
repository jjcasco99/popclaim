import React from 'react';
import Vector from '../assets/caret--down.png';

function Comparativadeinformes() {
  return (
    <div className="outerbox">
      <div className="headlight">
        <h3 className="headlight-title">Comparativa de informes</h3>
      </div>

      <div className="align-right">
        <ul id="trickmenu">
          <li>
            <input className="checkbox" type="checkbox" />
            Comparativa semanas <img src={Vector} alt="" />
          </li>
          <li>
            <input className="checkbox" type="checkbox" />
            Comparativa meses <img src={Vector} alt="" />
          </li>
          <li>
            <input className="checkbox" type="checkbox" />
            Comparativa años <img src={Vector} alt="" />
          </li>
        </ul>
        <div>
          <button className="generar">Generar comparativa</button>
        </div>
      </div>
    </div>
  );
}

export default Comparativadeinformes;
