import React from 'react'

const FunctionProp = ({mostrarMensagem}) => {
  return (
    <div>
        <p>Aqui é um exemplo de função sendo passada como prop em um elemento pai</p>
        <button onClick={mostrarMensagem}>show message</button>
    </div>
  )
}

export default FunctionProp