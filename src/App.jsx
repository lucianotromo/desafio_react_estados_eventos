import { useState } from 'react'
import './App.css'

import Input from './Components/Input'
import Boton from './Components/Boton'

function App() {

  const [nombre, setNombre] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="App">
      <div className='card'>
        <h3>Login</h3>
        
        <Input
          setNombre={setNombre}
          setPassword={setPassword}>
        </Input>

        { nombre && password === "252525" && <Boton></Boton>}
      </div>

    </div>
  )
}

export default App
