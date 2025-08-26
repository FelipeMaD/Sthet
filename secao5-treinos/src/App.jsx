import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './components/Forms'
function App() {

  return (
    < >
     <h1>Forms com react!</h1>
     <Forms user={{ nome:"joão", idade:"23", email:"joao@gmail.com", descricao:"Descrição gigantemente grande só para mostrar no textarea grandão aaaaaaaaaaaa"}}/>
    </>
  )
}

export default App
