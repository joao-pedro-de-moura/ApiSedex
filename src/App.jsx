import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Label from './componentes/Label/Label'
import ApiSedex from './componentes/ApiSedex/ApiSedex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <ApiSedex/>
    </div>
  )
}

export default App
