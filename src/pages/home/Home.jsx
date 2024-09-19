import React from 'react'
import Profile from '../../assets/home.jpeg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'

function Home() {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className='home__img' />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Sobhit Sinha</span> Web Developer
                    </h1>

                    <p className="home__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nam. Pariatur dolorem dolorum aperiam?
                    </p>

                    <Link to='/about' className='button'>
                        More About Me <span className='button__icon'>
                            <FaArrowRight/>
                        </span></Link>
                </div>
            </div>

            <div className="color__block">
                
            </div>
        </section>
    )
}

export default Home
