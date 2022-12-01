import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Service'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Service />
    <Portfolio />
   {/* <Testimonial />*/}
    <Contact />
    <Footer />


    
    </>
  )
}

export default App