
import React from 'react'
import Navigationbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import JoinList from './components/JoinList';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
    <Navigationbar/>
    <Hero />
    <About />
    <Features />
    <JoinList />
    <Footer />
    </>
  )
}

export default App;

/*<Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/features' element={<Features />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes> 
    <div className='components'>
    

  </div>
  import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Features from './components/pages/Features';
import Contact from './components/pages/Contact';
import {Route, Routes} from "react-router-dom"*/