import React from 'react'
import "./Hero.css"
import { Link } from "react-router-dom"


function Hero() {
    return (
        <div className='hero'>
            <div className="hero-content">
                <h1>The Long Weekend Sale</h1>
                <Link to="living"><button>Shop Now</button></Link>
            </div>
        </div>
    )
}

export default Hero