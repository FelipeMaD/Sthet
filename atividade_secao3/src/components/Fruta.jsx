import React from 'react'

const Fruta = ({nome, preco, quantidade, total}) => {
  return (
    <div>
        <ul>
            <li>{nome}</li>
            <li>{preco}</li>
            <li>{quantidade}</li>
            <li>{total}</li>
        </ul>
    </div>
  )
}

export default Fruta