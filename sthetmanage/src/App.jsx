import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main-content'>
      <div className='div-content'>
        <h1 id='title'>Hello, world!</h1>
        <p id='paragrafo-content'>Teste para resolução do primeiro exercício!</p>
      </div>
      <div id='botao-fake'>
        <h2>Finalizando o nosso teste de aprendizado mano</h2>
      </div>
    </div>
      
    </>
  )
}

export default App
