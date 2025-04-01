import React, { useState } from 'react'
import UserDetails from './UserDetails'
const DesafioSecao3 = () => {

    const[usersList, setUsersList] = useState([
        {id:1, nome:"Felipe", idade:23, profissao:"Programador"},
        {id:2, nome:"joao", idade:17, profissao:"ladrão"},
        {id:3, nome:"pedro", idade:21, profissao:"jogador"}
    ])

  return (
    <div>
        <h1>Desafio da secão 3 - curso</h1>
        {usersList.map((user) => (
            <UserDetails 
                key={user.id}
                name={user.nome}
                age={user.idade}
                work={user.profissao}
            />
        ))}
    </div>
  )
}

export default DesafioSecao3