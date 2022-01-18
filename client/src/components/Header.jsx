import React from 'react'
import './Header.css'

import logo from '../assets/logo_popclaim.png'
import down_arrow from '../assets/caret--down.png'
import overview from '../assets/overview.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook-square.png'
import instagram from '../assets/instagram-alt.png'
import list from '../assets/list.png'
import user from '../assets/user.png'
import gear from '../assets/ajustes.png'
import add from '../assets/add--alt.png'

const Header = () => {
    return (
        <header className='headerContainer'>
            
            <div id='logo'>
                <img src={logo} alt="Logo popclaim"/>
            </div>

            <div id='company'>
                <h3>BASH <img src={down_arrow} alt="" /></h3> 
                
            </div>

            <div className='overview'>
                
                <h3><img src={overview} alt="" /> OVERVIEW</h3>
                <div className='redes-sociales'>
                    <ul>
                        <li><input type="checkbox" /><img src={twitter} alt="" /> Twitter</li>
                        <li><input type="checkbox" /><img src={instagram} alt="" /> Instagram</li>
                        <li><input type="checkbox" /><img src={facebook} alt="" /> Facebook</li>
                        <li><img src={add} alt="" />Añadir</li>
                    </ul>
                </div>
            </div>

            <div className='informs'>
                <h3><img src={list} alt="" /> INFORMES</h3>
                <div className='opciones-informe'>
                    <ul>
                        <li>Nuevo informe</li>
                        <li>Historial de informes</li>
                    </ul>
                </div>
            </div>

            <div className='user-profile'>
                <h3><img src={user} alt="" /> PERFIL USUARIO</h3>
            </div>

            <div className='options'>
                <h3><img src={gear} alt="" /> AJUSTES</h3>
            </div>

        </header>
    )
}

export default Header
