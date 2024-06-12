import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 
  const [count, setCount] = useState(0) 

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Adventurer Vault</h1>
      <div className="card">
        <button className="btn btn-lg btn-info m-2" to="/login">
          Login
        </button>
        <button className="btn btn-lg btn-light m-2" to="/signup">
          Signup
        </button>
      </div>

      
      <p className="read-the-docs">
      
      </p>
    </>
  )
}

export default App
