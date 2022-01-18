import React from 'react';
import Reputation from './Reputation';
import './Report.css';
import TweetReport from './TweetReport';

const Report = () => {
  return (
    <section className="rep__container">
      <h2 className="rep__title">reputación bash</h2>
      <h3 className="rep__subtitle">
        Informe de 14 de enero de 2022 a 20 de enero de 2020
      </h3>
      <p className="rep__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing dd elit. Nunc,
        pellentesque odio nascetur malesuada ut.ef Dictum ultrices venenatis,
        nisl enim, semper. Lorem ipsum dolor sit amet, consectetur adipiscing dd
        elit. Nunc, pellentesque odio nascetur malesuada ut.ef Dictum ultrices
        venenatis, nisl enim, semper.{' '}
      </p>
      <div className="chartrep__container">
        <Reputation />
      </div>
      <p className="rep__text2">
        Lorem ipsum dolor sit amet, consectetur adipiscing dd elit. Nunc,
        pellentesque odio nascetur malesuada ut.ef Dictum ultrices venenatis,
        nisl enim, semper. Lorem ipsum dolor sit amet, consectetur adipiscing dd
        elit. Nunc, pellentesq Lorem ipsum dolor sit amet, consectetur
        adipiscing dd elit. Nunc, pellentesque odio nascetur malesuada ut.ef
        Dictum ultrices venenatis, nisl enim, semper. Lorem ipsum dolor sit
        amet, consectetur adipiscing dd elit. Nunc, pellentesq Lorem ipsum dolor
        sit amet, consectetur adipiscing dd elit. Nunc, pellentesque odio
        nascetur malesuada ut.ef Dictum ultrices venenatis, nisl enim, semper.
        Lorem ipsum dolor sit amet, consectetur adipiscing dd elit. Nunc,
        pellentesq Lorem ipsum dolor sit amet, consectetur adipiscing dd elit.
        Nunc, pellentesque odio nascetur malesuada ut.ef Dictum ultrices
        venenatis, nisl enim, semper. Lorem ipsum dolor sit amet, consectetur
        adipiscing dd elit. Nunc, pellentesq{' '}
      </p>
      <div className="cardtwit__container">
        <TweetReport />
      </div>
      <p className="rep__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing dd elit. Nunc,
        pellentesque odio nascetur malesuada ut.ef Dictum ultrices venenatis,
        nisl enim, semper. Lorem ipsum dolor sit amet, consectetur adipiscing dd
        elit. Nunc, pellentesque odio nascetur malesuada ut.ef Dictum ultrices
        venenatis, nisl enim, semper.{' '}
      </p>
      <p className="rep__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing dd elit. Nunc,
        pellentesque odio nascetur malesuada ut.ef Dictum ultrices venenatis,
        nisl enim, semper. Lorem ipsum dolor sit amet, consectetur adipiscing dd
        elit. Nunc, pellentesq Lorem ipsum dolor sit amet, consectetur
        adipiscing dd elit. Nunc, pellentesque odio nascetur malesuada ut.ef
        Dictum ultrices venenatis, nisl enim, semper. Lorem ipsum dolor sit
        amet, consectetur adipiscing dd elit. Nunc, pellentesq Lorem ipsum dolor
        sit amet, consectetur adipiscing dd elit. Nunc, pellentesque odio
        nascetur malesuada ut.ef Dictum ultrices venenatis, nisl enim, semper.
        Lorem ipsum dolor sit amet, consectetur adipiscing dd elit. Nunc,
        pellentesq Lorem ipsum dolor sit amet, consectetur adipiscing dd elit.
        Nunc, pellentesque odio nascetur malesuada ut.ef Dictum ultrices
        venenatis, nisl enim, semper. Lorem ipsum dolor sit amet, consectetur
        adipiscing dd elit. Nunc, pellentesq{' '}
      </p>
    </section>
  );
};

export default Report;
