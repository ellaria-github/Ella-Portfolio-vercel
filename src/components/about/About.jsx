import React from 'react'
import'./about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src="../assets/re.jpg" alt="About-image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward  className='about__icons'/>
              <h5>Experience</h5>
              <small>2 years Working</small>

            </article>
            <article className='about__card'>
              <FiUsers  className='about__icons'/>
              <h5>Clients</h5>
              <small>100+ worldwide</small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__icons'/>
              <h5>Projects</h5>
              <small>50+ completed</small>

            </article>
          </div>
          <p>
            My name is Emmanuella Iheachiluru ibeleme . I'm a Freelance Fullstack Developer based in Nigeria and i'm 
            very passionate and dedicated to my work with 2years experience as a Professional Fullstack Developer,
            I have acquired the skill to build great and premium Websites. 

          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About