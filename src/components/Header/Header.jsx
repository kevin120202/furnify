import React from 'react'
import "./Header.css"
import { Link, NavLink } from "react-router-dom"
import { BsCart } from "react-icons/bs";


function Header() {
    return (
        <header>
            <Link className='site-logo' to="/">Furnify</Link>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/living" end>Living</NavLink></li>
                    <li><NavLink to="/dining">Dining</NavLink></li>
                    <li><NavLink to="/bedroom">Bedroom</NavLink></li>
                    <li><BsCart className='cart' /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header