import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './view/Login'
import Home from './view/Home'


const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  )
}

export default AppContent
