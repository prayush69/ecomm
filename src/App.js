
import React from 'react'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Header from './components/Header'
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import Signup from './Pages/Signup'
import Footer from './components/Footer'

export default function App() {
  return (
  <div className="Maindiv">
  <Router>
  <Header className='header'/>


  <Routes>
    <Route path='/' element={<Shop/>} exact/>
    <Route path='/cart' element={<Cart/>} exact/>
    <Route path='/signup' element={<Signup/>} exact/>
    <Route path='/#footer' element={<Footer/>} exact/>


  </Routes>

  <Footer/>




  </Router>

   
   
    
      
  </div>
  )
}



