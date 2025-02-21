



//styles
import './App.css'

//components
 import FirstComponent from './components/FirstComponent.jsx'
 import TemplateExpressions from './components/TemplateExpressions.jsx'
 import MyComponent from './components/MyComponent.jsx'
 import EventsTraining from './components/EventsTraining.jsx'
import Challenge from './components/Challenge.jsx'
 
//assets
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//hooks
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <FirstComponent/> 
      <MyComponent/>
      <TemplateExpressions/>
      <EventsTraining/>
      <Challenge/>
    </div>
  )
}

export default App
