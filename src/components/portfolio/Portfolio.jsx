import React from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image' id="yu">
          <img src="../assets/meating.jpg" alt="About-image" />
          </div>
          <h3>This Is My Porfolio Title</h3>
          <div className='portfolio__item-cta'>
     <a href='https://github.com/ellaria-github' className='btn' target='_blank'>Github</a>
     <a href='https://dribbble.com/ellaria_vlog' className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'id="yu">
          <img src="../assets/pod.jpg" alt="About-image" />
          </div>
          <h3>This Is My Porfolio Title</h3>
          <div className='portfolio__item-cta'>
     <a href='https://github.com/ellaria-github' className='btn' target='_blank'>Github</a>
     <a href='https://dribbble.com/ellaria_vlog' className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'id="yu">
          <img src="../assets/unity.jpg" alt="About-image" />
          </div>
          <h3>This Is My Porfolio Title</h3>
          <div className='portfolio__item-cta'>
     <a href='https://github.com/ellaria-github' className='btn' target='_blank'>Github</a>
     <a href='https://dribbble.com/ellaria_vlog' className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image' id="yu">
          <img src="../assets/cup.jpg" alt="About-image" />
          </div>
          <h3>This Is My Porfolio Title</h3>
          <div className='portfolio__item-cta'>
     <a href='https://github.com/ellaria-github' className='btn' target='_blank'>Github</a>
     <a href='https://dribbble.com/ellaria_vlog' className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image' id="yu">
          <img src="../assets/no.jpg" alt="About-image" />
          </div>
          <h3>This Is My Porfolio Title</h3>
          <div className='portfolio__item-cta'>
     <a href='https://github.com/ellaria-github' className='btn' target='_blank'>Github</a>
     <a href='https://dribbble.com/ellaria_vlog' className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image' id="yu">
          <img src="../assets/graph.jpg" alt="About-image" />
          </div>
          <h3>This Is My Porfolio Title</h3>
          <div className='portfolio__item-cta'>
     <a href='https://github.com/ellaria-github' className='btn' target='_blank'>Github</a>
     <a href='https://dribbble.com/ellaria_vlog' className='btn btn-primary' target='_blank'>Live Demo</a>
     </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio