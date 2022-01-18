import React from 'react';
import './Card.css';
import logo from '../assets/logo.png';
import Vectorcomment from '../assets/Vectorcomment.png';
import Vectorlove from '../assets/Vectorlove.png';
import arrowdown from '../assets/arrowdown.png';
import Vectorretweet from '../assets/Vectorretweet.png';
// import {logo, Vectorcomment, Vectorlove, Vectorretweet} from ../assets/

function card({ tweet }) {
  const {
    polarity,
    text,
    created_at,
    retweet_count,
    username,
    followers_count,
    verified,
  } = tweet;

  return (
    <section>
      <div className="mainContainer">
        <div className="twit-container">
          <div
            className={`line ${polarity === 1 ? 'green-line' : 'red-line'}`}
          ></div>
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div>
            <div>
              <p className="twit-title">
                <strong>{username} </strong>@{username}
              </p>
              <p className="twit-text">{text}</p>
            </div>
            <div className="iconbar">
              {/* <div className='leftalign'> */}
              <p>
                <img src={Vectorcomment} alt="comment" /> 23
              </p>
              <p>
                <img src={Vectorlove} alt="like" /> 3
              </p>
              <p>
                <img src={Vectorretweet} alt="retwit" /> {retweet_count}
              </p>
              {/* </div> */}
              <div className="rightalign">
                <p className={`${polarity === 1 ? 'positive' : 'negative'}`}>
                  {polarity === 1 ? 'POSITIVO' : 'NEGATIVO'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default card;
