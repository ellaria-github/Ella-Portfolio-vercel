import React from 'react'
import './service.css'
import {BiCheckCircle} from 'react-icons/bi'
const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>
      <div className='container service__container'>
        
        <article className='service'>
        <div className='service_head'>
        <h3>Graphics Design</h3>
        </div>
        <ul className='service_list'>
        <li>
          <BiCheckCircle className='service__list-icon'/>
            <p>I design Business Card</p>
            </li>
            <li>
          <BiCheckCircle className='service__list-icon'/>
            <p> I design Flyer's and Banner</p>
            </li>
        </ul>
        </article>
        <article className='service'>
        <div className='service_head'>
        <h3>Web Designer</h3>
        </div>
        <ul className='service_list'>
          
          <li>
          <BiCheckCircle className='service__list-icon'/>
            <p>I develop the User Interface</p>
            </li>
            <li>
          <BiCheckCircle className='service__list-icon'/>
            <p>I develop  an  Admin Page</p>
            </li>
            <li>
          <BiCheckCircle className='service__list-icon'/>
            <p>Web page Development</p>
            </li>
            <li>
          <BiCheckCircle className='service__list-icon'/>
            <p>I position your company brand</p>
            </li>
            <li>
          <BiCheckCircle className='service__list-icon'/>
            <p>I develop Apps</p>
            </li>
          
        </ul>
        </article>
        <article className='service'>
        <div className='service_head'>
        <h3>Affilate Marketer</h3>
        </div>
        <ul className='service_list'>
        <li>
          <BiCheckCircle className='service__list-icon'/>
            <p>I Market People's Product</p>
            </li>
            <li>
          <BiCheckCircle className='service__list-icon'/>
            <p>I Advertise Companies Product </p>
            </li>
          

        </ul>
        </article>
      </div>
    </section>
  )
}

export default Service