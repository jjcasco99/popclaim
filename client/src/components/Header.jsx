import React from 'react'
import './Header.css'
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';

import logo from '../assets/logo_popclaim.png'
import down_arrow from '../assets/caret--down.png'
import overview from '../assets/overview.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook-square.png'
import instagram from '../assets/instagram-alt.png'
import list from '../assets/list.png'
import user from '../assets/user.png'
import gear from '../assets/log-out.png'
import add from '../assets/add--alt.png'

const Header = () => {
    const { logout } = useAuth0();
    return (
        <header className='headerContainer'>

            <div id='logo'>
                <img src={logo} alt="Logo popclaim" />
            </div>

            <div id='company'>
                <h3>BASH <img src={down_arrow} alt="" /></h3>

            </div>

            <div className='overview'>

                <h3><img src={overview} alt="" /><Link to="/"> OVERVIEW</Link></h3>
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
                        <li><Link to="/informe">Nuevo informe</Link></li>
                        <li>Historial de informes</li>
                    </ul>
                </div>
            </div>

            <div className='user-profile'>
                <h3><img src={user} alt="" /> PERFIL USUARIO</h3>
            </div>

            <div className='options'>
                <h3 onClick={() => logout({ returnTo: window.location.origin })}><img src={gear} alt="" /> CERRAR SESIÓN</h3>
            </div>

        </header>
    )
}

export default Header
