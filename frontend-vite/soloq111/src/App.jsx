import { useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Index from './components/Index/Index'
import Leaderboard from './components/Leaderboard/Leaderboard'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header></Header>

      <div className='container'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/leaderboard/:elo' element={<Leaderboard />} />
        </Routes>
      </div> 
    
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
