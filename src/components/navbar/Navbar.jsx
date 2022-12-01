import React from 'react'
import './navbar.css'
import{AiOutlineHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import{RiContactsLine} from 'react-icons/ri'

const Navbar = () => {
  
  return (
    <nav>
      <a href='#'className='active'><AiOutlineHome /></a>
      <a href='#about' ><AiOutlineUser /></a>
      <a href='#experience'><BiBook /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><RiContactsLine /></a>
    </nav>
  )
}

export default Navbar