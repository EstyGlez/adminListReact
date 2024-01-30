import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AdminList from './views/AdminList.jsx'
import Navbar from './components/navBar/NavBar.jsx'
import Footer from './components/footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Navbar/>
  <AdminList/>
  <Footer/>
  </React.StrictMode>,
)
