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
        </div>
        <div className="data__container">
          <h3 className="data__title">destacadas</h3>
          <div>
            <p>keyword1</p>
            <p>keyword1</p>
            <p>keyword1</p>
            <p>keyword1</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keywords;
