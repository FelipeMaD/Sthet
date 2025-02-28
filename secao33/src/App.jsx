



//styles
import './App.css'

//components
import ManageData from './components/ManageData.jsx'
 
//assets
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//hooks
import { useState } from 'react'
import ListRender from './components/ListRender.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <ManageData /> */}
      <ListRender/>
    </>
      
  )
}

export default App
