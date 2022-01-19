import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './Cardlist.css';

function Cardlist() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const resp = await axios.get(
          `https://popclaim.herokuapp.com/api/tweets?page=${
            Math.floor(Math.random() * 10) + 1
          }`
        );
        setTweets(resp.data.data.tweets);
        console.log(tweets);
      } catch (error) {
        console.log(error);
      }
    };
    getTweets();
  }, []);

  // Paint tweets function
  const paintTweets = () => {
    return tweets.map(tweet => <Card key={tweet.created_at} tweet={tweet} />);
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
