import React from 'react'
import Card from './Card'
import cardlist from './cardlist.css'
import search from '../assets/search.png'

function Cardlist() {




    return (
        <>
            <div className='wrapper'>
                <div className='listbody'>
                    <h4>COMENTARIOS INFLUYENTES</h4>
                </div>

                <div className='inputarea'>
                    <input className="search" type="text" placeholder='Buscar' />
                    <button className="filter">Añadir filtros</button>
                </div> 
                <div>
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Cardlist
