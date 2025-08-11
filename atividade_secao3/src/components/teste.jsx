import React from 'react'

const Teste = ({id, quantidade, valor}) => {

    const calculaPreco = () =>{
        return quantidade * valor
    }
  return (
    <div>
        <p>Id: {id}</p>
        <p>Valor {valor}</p>
        <p>Quantidade: {quantidade}</p>
        <h1>Total da compra: R$ {calculaPreco()}</h1>
    </div>
  )
}

export default Teste