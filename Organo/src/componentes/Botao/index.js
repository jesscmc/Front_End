import './botao.css'
import React from 'react'


const Botao = ({texto}) => {
    return <button className="botao">
                {texto}
            </button>
}

export default Botao