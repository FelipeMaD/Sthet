import React from 'react'

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h1>Detalhes do meu {brand}</h1>
        <ul>
            <li>Marca - {brand}</li>
            <li>KM - {km}</li>
            <li>Cor - {color}</li>
        </ul>
        {km == 0 ? (
          <p>Carro novo em folha, zero km </p>
        ) : (
          <p>Carro usado, vale a pena nn</p>
        )}
    </div>
  )
}

export default CarDetails