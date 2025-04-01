import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DesafioSecao3 from './components/DesafioSecao3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DesafioSecao3/>
    </>
  )
}

export default App
