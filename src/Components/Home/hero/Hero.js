import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <>
       <section className='hero'>
        <div className='container'>
            <div className='row'>
                <h1>Welcome to Empower360</h1>
                <p>Discover policies with us, we are focussed on providing intel on various policies so that you can live a happy life!</p>
                <div className='pol_tagline'>
                    <p>Policies According To Your Needs!</p></div>
                
                <div className='buttonForHero'>
                    <button className='primary-btn'>
                        TAP TO KNOW MORE <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button className='primary-btn'>
                        VIEW POLICIES <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                <div className='Rating'>
                    <p>Rated 5 stars by Times</p>
                    <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                    <p>On 5th April, 2024</p>
                </div>
                
                <section className='forPic'>
                
                </section>
        <section className='hero2'>
        <div className='moreContent'>
            <p> We are a startup from Delhi Technological University. We aim at providing various policies segregated according to your need.</p>
            
        </div>
        <div>
            <button className='Finance-Related-Policies'>Finance Policies</button>
            <button className='Education-Related-Policies'>Education Policies</button>
            <button className='Age-Related-Policies'>Age Policies</button>
            <button className='Gender-Related-Policies'>Gender Policies</button>
            <button className='Healthcare-Related-Policies'>Healthcare Policies</button>
            <button className='Workers-Right-Related-Policies'>Workers Right Related Policies</button>
        </div>
       </section>
            </div>
        </div>
       </section>
       <div className='margin'></div>
    </>
    
  )
}

export default Hero