import React from 'react';
import KeywordsChart from './KeywordsChart';
import data2 from '../utils/data/data2.json';
import './Charts.css';

const Keywords = () => {
  return (
    <section className="container">
      <h2 className="chart__title">keywords</h2>
      <div className="flex__container">
        <div className="data__container">
          <h3 className="data__title">usuarios</h3>
          <div className="chart__container">
            <KeywordsChart data2={data2} />
          </div>
          <div className="keywords__container">
            <div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  materiales
                </p>
                <p className="keyword__text">5.603 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  servicio
                </p>
                <p className="keyword__text">2.322 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  precio
                </p>
                <p className="keyword__text">1.232 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  servicio
                </p>
                <p className="keyword__text">4.672 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  precio
                </p>
                <p className="keyword__text">2.547 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  materiales
                </p>
                <p className="keyword__text">5.603 menciones</p>
              </div>
            </div>
            <div>
              <div>
                <p className="keyword__title keyword__title--negative">5G</p>
                <p className="keyword__text">3.649 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--negative">
                  estética
                </p>
                <p className="keyword__text">5.503 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--negative">
                  cámara
                </p>
                <p className="keyword__text">1.220 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--negative">
                  estética
                </p>
                <p className="keyword__text">4.307 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--negative">
                  cámara
                </p>
                <p className="keyword__text">3.123 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--negative">
                  estética
                </p>
                <p className="keyword__text">1.003 menciones</p>
              </div>
            </div>
          </div>
        </div>
        <div className="data__container">
          <h3 className="data__title">destacadas</h3>
          <div className="highlights__container">
            <div className="card__container">
              <p className="keyword__title keyword__title--positive">
                tecnología &#8593;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--positive">
                BASH &#8593;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--negative">
                5G &#8595;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--positive">
                precio &#8593;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--negative">
                Bloqueo &#8595;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--positive">
                pantalla &#8593;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--positive">
                batería &#8593;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--negative">
                cámara &#8595;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keywords;
