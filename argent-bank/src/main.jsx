import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router, Routes, Route } from 'express'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import User from './pages/user/User'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router baseline={"/"}>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<User />} />
        </Routes>
        <Footer />
      </Router>
  </React.StrictMode>
)