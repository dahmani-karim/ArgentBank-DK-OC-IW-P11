import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './sass/main.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import User from './pages/user/User'

// Redux : import Provider et store
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Redux : passer le store en props du Provider */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router baseline={"/"}>
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/user' element={<User />} />
          </Routes>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)