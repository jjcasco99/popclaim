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
            <div className="keywords__percentage">
              <p className="percentage__number keyword__title--positive">
                {`${data2[1].value * 100}%`}
              </p>
              <div className="percentage__line"></div>
              <p className="percentage__number keyword__title--negative">
                {`${data2[0].value * 100}%`}
              </p>
            </div>
          </div>
          <div className="keywords__container">
            <div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  Materiales
                </p>
                <p className="keyword__text">5.603 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  Servicio
                </p>
                <p className="keyword__text">2.322 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  Precio
                </p>
                <p className="keyword__text">1.232 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  Atención
                </p>
                <p className="keyword__text">4.672 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  WiFi
                </p>
                <p className="keyword__text">2.547 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--positive">
                  Pantalla
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
                  Estética
                </p>
                <p className="keyword__text">5.503 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--negative">
                  Cámara
                </p>
                <p className="keyword__text">1.220 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--negative">
                  Cristal
                </p>
                <p className="keyword__text">4.307 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--negative">
                  Botones
                </p>
                <p className="keyword__text">3.123 menciones</p>
              </div>
              <div>
                <p className="keyword__title keyword__title--negative">
                  Sonido
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
                Tecnología &#8593;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--positive">
                Samsung &#8593;
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
                Precio &#8593;
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
                Pantalla &#8593;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--positive">
                Batería &#8593;
              </p>
              <p className="keyword__text">5.000 menciones / 3.500 positivas</p>
            </div>
            <div className="card__container">
              <p className="keyword__title keyword__title--negative">
                Diseño &#8595;
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
