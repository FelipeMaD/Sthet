



//styles
import './App.css'

//components
import ManageData from './components/ManageData.jsx'
import Message from './components/Message.jsx'
 
//assets
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//hooks
import { useState } from 'react'
import ListRender from './components/ListRender.jsx'
import ChangeMessageState from './components/ChangeMessageState.jsx'



function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState("");

  const handleChangeMessage = (msg) =>{
      setMessage(msg);
  }

  return (
    <>
      {/* <ManageData /> */}
      <ListRender/>

      {/* state lift */} 

      <Message msg={message}/>
      <ChangeMessageState changeMessage={handleChangeMessage}/>
    </>
      
  )
}

export default App
