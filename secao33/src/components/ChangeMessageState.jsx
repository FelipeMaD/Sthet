import React, { useState } from 'react'

const ChangeMessageState = ({changeMessage}) => {

    const [messageList, setMessageList] = useState(["Olá", "Hey", "MeuDeus", "Eae"])

  return (
    <div>
        <button onClick={() => changeMessage(messageList[0])}>Mensagem 1</button>
        <button onClick={() => changeMessage(messageList[1])}>Mensagem 2</button>
        <button onClick={() => changeMessage(messageList[2])}>Mensagem 3</button>
        <button onClick={() => changeMessage(messageList[3])}>Mensagem 4</button>
    </div>
  )
}

export default ChangeMessageState