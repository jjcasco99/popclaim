import React from 'react'

const Header = () => {
    return (
        <div className='headerContainer'>
            
            <div id='logo'>
                <img src="" alt="" />
            </div>

            <div>
                <p>BASH</p>
            </div>

            <div className='overview'>
                <p>OVERWIEV</p>
                <div className='redes-sociales'>
                    <ul>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Añadir</li>
                    </ul>
                </div>
            </div>

            <div className='informes'>
                <p>Informes</p>
                <div className='opciones-informe'>
                    <ul>
                        <li>Nuevo informe</li>
                        <li>Historial de informes</li>
                    </ul>
                </div>
            </div>

            <div>
                <p>PERFIL USUARIO</p>
            </div>

            <div>
                <p>AJUSTES</p>
            </div>

        </div>
    )
}

export default Header
