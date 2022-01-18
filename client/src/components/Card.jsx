import React from 'react';
import './Card.css';
import logo from '../assets/logo.png';
import Vectorcomment from '../assets/Vectorcomment.png';
import Vectorlove from '../assets/Vectorlove.png';
import arrowdown from '../assets/arrowdown.png';
import Vectorretweet from '../assets/Vectorretweet.png';
// import {logo, Vectorcomment, Vectorlove, Vectorretweet} from ../assets/

function card() {
  return (
    <section>
      <div className="mainContainer">
        <div className="twit-container">
          <div className="line red-line green-line"></div>
          <div className="logo-container">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div>
            <div>
              <p className="twit-title">
                <strong> Nombre user </strong>@user.fecha
              </p>
              <p className="twit-text">
                Descripcion: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>
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
                <img src={Vectorretweet} alt="retwit" /> 18
              </p>
              {/* </div> */}
              <div className="rightalign">
                <p className="positive">POSITIVO &#8593;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default card;
