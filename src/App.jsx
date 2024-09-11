import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'


function App() {

  const isAuthenticated = true

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile/:userId' element={isAuthenticated ? <Profile/> :<Navigate to='/login'/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
