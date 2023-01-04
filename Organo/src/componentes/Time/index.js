import Colaborador from '../Colaborador'
import './time.css'
import React from 'react'

const Time = ({ time, aoFavoritar, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)' }}>
            <input onChange={evento => 
                mudarCor(evento.target.value, time.id)} 
                value = {time.cor} 
                type='color' 
                className='input-cor'>
            </input>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    console.log('renderizar colaborador')
                    return (
                        <Colaborador 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={time.cor} 
                            aoDeletar = {aoDeletar} 
                            aoFavoritar = {aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time