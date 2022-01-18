import React from 'react'
import './Informe.css'
import arrow from '../assets/caret--right.png'

const Informe = () => {
    return (
        <div className='global'>
            <div className='cabecera-informe'>
                <h1>INFORME BASH</h1>
                <h2>Año/s 2022 <img src={arrow} alt="" /></h2>
                <h2>Mes/s Enero <img src={arrow}  alt="" /></h2>
                <input type="submit" value="Descargar" id='download' />
            </div>
        </div>
        
    )
}

export default Informe
