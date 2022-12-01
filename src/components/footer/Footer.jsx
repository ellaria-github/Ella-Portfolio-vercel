import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  
  return (
    <footer>
      <a href='#' className='Footer_logo'>ELLARIA</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Experience</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Portfolio</a></li>
       {/* <li><a href='#'>Testimonial</a></li>*/}
        <li><a href='#'>Contact</a></li>
        </ul>
        <div className="footer___socials">
          <a href='https://facebook.com'><FaFacebookF /> </a>
          <a href='https://instagram.com'><FiInstagram /></a>
          <a href='https://twitter.com'><IoLogoTwitter /></a>

          </div>
   
      <div className="footer__copyright">
        <small>&copy; ELLARIA, All Right Reserved.</small>
        </div>
      </footer>
  )
}

export default Footer