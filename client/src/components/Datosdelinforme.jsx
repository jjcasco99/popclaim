import React from 'react'
import Vector from '../assets/Vector.png'
import './Datosdelinforme.css'




function Datosdelinforme() {
    return (
        <div className="outerbox">
            <div className='headlight'>
                <h3>Generar informe</h3>
            </div>

        <div className='align-right'>
           <ul id='datalist'>
                    <li><input type='checkbox'></input>Gráfico de reputación </li>
                    <li><input type='checkbox'></input>Keywords usuarios <img src= {Vector} alt="" /></li>
                    <p className='hovergrey'>Todas</p>
                    <p className='hovergrey'>Psitivas</p>
                    <p className='hovergrey'>Negativas</p>
                    <li><input type='checkbox'></input>Keywords destacadas</li>
                    <li><input type='checkbox'></input>Comentarios destacados <img src= {Vector} alt="" /> </li>
                    <p className='hovergrey'>Más influyentes</p>
                    <p className='hovergrey'>Más recientes</p>
                    <p className='hovergrey'>Más antiguas</p>
                    <p className='hovergrey'>Más comentarios</p>
                    <p className='hovergrey'>Más retweets</p>      
            </ul>
            </div>
            <div>
            <button className='generar'>Generar</button>
            </div>
        </div>
    )
}

export default Datosdelinforme
