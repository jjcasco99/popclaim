import React from 'react';
import data1 from '../utils/data/data1.json';
import ReputationChart from './ReputationChart';
import './Charts.css';

const Reputation = () => {
  return (
    <section className="container">
      <h2 className="chart__title">gráfico de reputación</h2>
      <div className="chart__container">
        <ReputationChart data1={data1} />
      </div>
    </section>
  );
};

export default Reputation;
