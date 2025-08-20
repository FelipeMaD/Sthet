import React, { useState } from 'react'
import Carro from './Carro'
import '../styles/Main.css'

const Main = () => {

    const[listaCarros, setListaCarros] = useState([
        {id:1, marca:"reanult", preco:30000, nome:"sandero"},
        {id:2, marca:"fiat", preco:45000, nome:"palio"},
        {id:3, marca:"kia", preco:50000, nome:"assou"}
    ]);
    

  return (
    <div className='listMain'>
        {listaCarros.map( (carro) => (
            <Carro key={carro.id} id ={carro.id} marca ={carro.marca} preco ={carro.preco} nome = {carro.nome}/>
        ))}

        

    </div>
  )
}

export default Main