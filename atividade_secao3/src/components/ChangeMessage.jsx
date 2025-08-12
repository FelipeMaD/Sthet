import React from 'react'

const ChangeMessage = ({myFunction}) => {


    const mensagens = ["Olá", "Opa", "Turubom"]

  return (
    <div>
        <button onClick={() => myFunction(mensagens[0])}>
            1
        </button>
        <button onClick={() => myFunction(mensagens[1])}>
            2       
        </button>
        <button onClick={() => myFunction(mensagens[2])}>
            3
        </button>
    </div>
  )
}

export default ChangeMessage