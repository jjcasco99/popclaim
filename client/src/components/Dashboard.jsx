import React from 'react'
import './Dashboard.css'

import arrow from '../assets/caret--right.png'

const Dashboard = () => {
    return (
        <div className='cabecera-dashboard'>
            <h1>REPUTACIÓN BASH</h1>
            <h2>Año/s 2022 <img src={arrow} alt="" /></h2>
            <h2>Mes/s Enero <img src={arrow}  alt="" /></h2>
            <input type="submit" value="Actualizar datos" id='data' />
            <input type="submit" value="Generar informe" id='create-inform'/>
        </div>
    )
}

export default Dashboard
