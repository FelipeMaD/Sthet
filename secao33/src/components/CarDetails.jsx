import React from 'react'

const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h1>Detalhes do meu fusca</h1>
        <ul>
            <li>Marca - {brand}</li>
            <li>KM - {km}</li>
            <li>Cor - {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails