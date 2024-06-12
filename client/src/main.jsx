import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header.jsx'
// import Signup from './pages/Signup.jsx'
import Create from './pages/Create.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('head')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Create />
  </React.StrictMode>
);