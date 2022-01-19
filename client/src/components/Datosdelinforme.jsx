import React from 'react';
import caretdown from '../assets/caret--down.png';
import './Datosdelinforme.css';

function Datosdelinforme() {
  return (
    <div className="outerbox">
      <div className="headlight">
        <h3 className="headlight-title">Datos del informe</h3>
      </div>

      <div className="align-right">
        <ul id="datalist">
          <li>
            <input className="checkbox" type="checkbox"></input>Gráfico de
            reputación
          </li>
          <li>
            <input className="checkbox" type="checkbox"></input>Keywords
            usuarios
            <img src={caretdown} alt="" />
          </li>
          <p className="hovergrey">Todas</p>
          <p className="hovergrey">Positivas</p>
          <p className="hovergrey">Negativas</p>
          <li>
            <input className="checkbox" type="checkbox"></input>Keywords
            destacadas
          </li>
          <li>
            <input className="checkbox" type="checkbox"></input>Comentarios
            destacados
            <img src={caretdown} alt="" />
          </li>
          <p className="hovergrey">Más influyentes</p>
          <p className="hovergrey">Más recientes</p>
          <p className="hovergrey">Más antiguas</p>
          <p className="hovergrey">Más comentarios</p>
          <p className="hovergrey">Más retweets</p>
        </ul>
      </div>
    </div>
  );
}

export default Datosdelinforme;
