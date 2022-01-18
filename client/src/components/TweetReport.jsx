import React from 'react';
import './Card.css';
import logo from '../assets/logo.png';
import Vectorcomment from '../assets/Vectorcomment.png';
import Vectorlove from '../assets/Vectorlove.png';
import Vectorretweet from '../assets/Vectorretweet.png';

function card() {
  return (
    <section>
      <div className="mainContainer">
        <div className="twit-container">
          <div className="line red-line"></div>
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div>
            <div>
              <p className="twit-title">
                <strong>meinOddity </strong>@meinOddity
              </p>
              <p className="twit-text">
                Segun yo escogí samsung para silenciar las notificaciones y para
                solo escuchar llamadas, aun así vibran, es molesto tener que
                silenciar una por una, ya no escogere Samsung.
              </p>
            </div>
            <div className="iconbar">
              <p>
                <img src={Vectorcomment} alt="comment" /> 23
              </p>
              <p>
                <img src={Vectorlove} alt="like" /> 3
              </p>
              <p>
                <img src={Vectorretweet} alt="retwit" /> 16
              </p>
              <div className="rightalign">
                <p className="negative">NEGATIVO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default card;
