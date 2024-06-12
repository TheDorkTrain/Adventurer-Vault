import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'


  import './App.css'


  function App() { 
    return (
      <>
        <h1>Adventurer Vault</h1>
        <div className="card">
          <button>
          <a className="btn btn-lg btn-info m-2" href="/login">
            Enter the realm
          </a>
          </button>
          <button>
          <a className="btn btn-lg btn-light m-2" href="/signup">
            Initiate your journey
          </a>
          </button>
        </div>

        <div className="app">
          <Header/>
          <main/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/error" element={<ErrorPage/>} />
            </Routes>

            <Footer />
        </div>
      </>
    )
  }


export default App;
