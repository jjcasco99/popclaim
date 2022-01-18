import React from 'react';
import Card from './Card';
import './Cardlist.css';
import search from '../assets/search.png';

function Cardlist() {
  return (
    <section className="wrapper">
      <div className="wrapper-header">
        <h4 className="wrapper-title">COMENTARIOS INFLUYENTES</h4>
        <div className="inputarea">
          <input className="search" type="text" placeholder="Buscar" />
          <button className="filter">Añadir filtros</button>
        </div>
      </div>

      <div className="scroll">
        <section>
          <Card />
        </section>
        <section>
          <Card />
        </section>
        <section>
          <Card />
        </section>
        <section>
          <Card />
        </section>
        <section>
          <Card />
        </section>
        <section>
          <Card />
        </section>
      </div>
    </section>
  );
}

export default Cardlist;
