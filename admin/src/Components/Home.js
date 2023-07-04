import React from 'react'
import About from './About'
import Contact from './Contact'
import Project from './Project'
import Footer from './Footer'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
        <About/>
        <Project/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home