import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route , Routes} from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <div>
      <Navbar/>
    
      <Routes>
      <Route exact path='/' element={<Home/>}/>
      
      
      <Route path='/about' element={<About/>}/>
      
      
      <Route path='/contact' element={<Contact/>}/>
     
      
      <Route path='/login' element={<Login/>}/>
      
      
      <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
      
    </div>
  )
}

export default App
