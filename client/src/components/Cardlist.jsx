import React from 'react';
import Card from './Card';
import './Cardlist.css';

function Cardlist({ tweets }) {
  console.log(tweets);

  // Paint tweets function
  const paintTweets = () => {
    return tweets.map(tweet => <Card key={tweets.created_at} tweet={tweet} />);
  };

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
        <div>{paintTweets()}</div>
      </div>
    </section>
  );
}

export default Cardlist;
