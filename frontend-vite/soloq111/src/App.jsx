import { useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Index from './components/Index'
import Leaderboard from './components/Leaderboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav className='navbar navbar-expand navbar-light bg-light'>
        <ul className='navbar-nav'>
          <li className="nav-item">
            <NavLink to='/' className='nav-link' > Index </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/leaderboard' className='nav-link'> Leaderboard </NavLink>
          </li>
        </ul>
      </nav>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
