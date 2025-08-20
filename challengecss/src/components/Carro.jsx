import React from 'react'
import styleCarro from '../styles/Carro.module.css'

const Carro = ({id, marca, preco, nome}) => {
  return (
    <div className={styleCarro.div_Carro}>
        <ul className={styleCarro.listCarro}>
            <li>{id}</li>
            <li>{marca}</li>
            <li>{preco}</li>
            <li>{nome}</li>
        </ul>
    </div>
  )
}

export default Carro