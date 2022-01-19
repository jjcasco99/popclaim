import React from 'react'
import './Aplicarfiltros.css'

function Aplicarfiltros() {
    return (
        <div className="bodycontainer">
            <h4 className='showcomments'>Mostrar comentarios</h4>
            <div className='threebuttons'> 
                <button className='butonone'>Todos</button>
                <button className='butonone'>Positivos</button>
                <button className='butonone'>Negativos</button>

            </div>
                <h4 className='showcomments'>Ordenar por</h4>
                <button className='masinfluyente'>Más influyentes</button>
            <div>
                <button className='butontwo'>Más recientes</button>
                <button className='butontwo'>Más antiguos</button>
            </div>
            
        </div>
    )
}

export default Aplicarfiltros
