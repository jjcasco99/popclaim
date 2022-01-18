import React from 'react';
import Card from "./card.css"
import logo from "../assets/logo.png";
import Vectorcomment from "../assets/Vectorcomment.png"
import Vectorlove from "../assets/Vectorlove.png"
import arrowdown from "../assets/arrowdown.png"
import Vectorretweet from "../assets/Vectorretweet.png"


// import {logo, Vectorcomment, Vectorlove, Vectorretweet} from ../assets/


function card(props) {

    return (
        
        <div className="mainContainer">

            <div className="upperHeadlight">
                <img className="logo" src={logo} alt="logo"/>  
                <p id="headlight"> <strong> Nombre user </strong>@user.fecha</p>                  
            </div>
            <div className="twitText">
                    
                    <p>Descripcion: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>                
            </div>

                    <div className="iconbar">
                        {/* <div className='leftalign'> */}
                            <p><img src={Vectorcomment} alt="retwit"/> 23</p>
                            <p><img src={Vectorlove}/> 3</p>
                            <p><img src={Vectorretweet}/> 18</p>
                        {/* </div> */}
                            <div className='rightalign'>
                                <p id="negative">NEGATIVO </p>
                            </div>
                        </div>
                    
                            

         </div>
    );
}


export default card

