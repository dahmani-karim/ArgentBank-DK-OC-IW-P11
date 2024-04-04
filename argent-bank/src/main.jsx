import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './sass/main.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import User from './pages/user/User'

// Configuration Redux
  import { Provider } from 'react-redux'
  import { configureStore } from '@reduxjs/toolkit'
  import rootReducer from './reducers/index'

  const store = configureStore ({
    reducer: rootReducer,
    devTools: true,
  })
//

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
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
  </Provider>
)