import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AdminList from './views/AdminList.jsx'
import Footer from './components/navBar/Footer/Footer.jsx'
import Navbar from './components/navBar/NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AdminList/>
  <Navbar/>
  <Footer/>
  </React.StrictMode>,
)
