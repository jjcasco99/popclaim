import React from 'react'
import './Comparativadeinformes.css'
import Vector from '../assets/Vector.png'



function Comparativadeinformes() {
    return (
        <div className="outerbox">
            <div className='headlight'>
                <h3>Gnerar informe</h3>
            </div>

            <div className='align-right'>
                <ul id='trickmenu'>
                    <li><input type='checkbox'/>Comparativa semanas <img src= {Vector} alt="" /></li>
                    <li><input type='checkbox'/>Comparativa meses <img src= {Vector} alt="" /></li>
                    <li><input type='checkbox'/>Comparativa años <img src= {Vector} alt="" /></li>
                </ul>
            
                <button>Generar comparativa</button>
            
            </div>

        </div>
    )
}

export default Comparativadeinformes
