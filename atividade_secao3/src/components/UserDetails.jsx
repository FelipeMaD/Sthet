import React from 'react'

const userDetails = ({name, age, work}) => {

  return (
    <div>
        <h3>Olá, {name}!</h3>
        <p>Seus dados pessoais:</p>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {work}</li>
        </ul>
        {age >= 18 ? (
            <p>Olha só, você já é apto a tirar sua carteira de habilitação!</p>
        ) : (
            <p>Você ainda é menor de idade, ainda não é possível tirar sua habilitação.</p>
        )}
    </div>
  )
}

export default userDetails