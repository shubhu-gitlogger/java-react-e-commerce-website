import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Router>
      <Routes>
        <Route path="/" element = {<LoginPage />} />
        <Route path="/register" element = {<RegisterPage />} />
      </Routes>  
    </Router>  */}

     <LoginPage/>
    </>
  )
}

export default App
