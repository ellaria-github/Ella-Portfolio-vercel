import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7cizby9', 'template_j3dubce', form.current, '2ARi4gFR4OpqjUa_v')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>ibelemeemmanuella@gmail.com</h5>
          <a href='mailto:ibelemeemmanuella@gmail.com' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            < RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Emmanuella Ibeleme</h5>
          <a href='mailto:ibelemeemmanuella@gmail.com' target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatSapp</h4>
          <h5>digit</h5>
          <a href='https://api.whatsapp.com/send?phone=+2347010589344' target="_blank">Send a Message</a>
          </article>
        </div>
<form ref={form} onSubmit={sendEmail}>
  <input type="text" name='name' placeholder='Your Full Name' required/>
  <input type="email" name='email' placeholder='Your Email' required/>
  <textarea name='message' rows='7' placeholder='Your message' required></textarea>
  <button type='submit' className='btn btn-primary'>Send Message</button>

</form>
      </div>
    </section>
  )
}

export default Contact