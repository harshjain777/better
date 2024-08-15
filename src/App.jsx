import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutUs/AboutUs'
import Calculator from './pages/calculator/Calculator'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/calculator' element = {<Calculator/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
