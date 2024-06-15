import React from 'react'
import { Link, NavLink } from "react-router-dom"
import "./Header.css"

function Header() {
    return (
        <header>
            <nav>
                <Link to="/"><h2>Furnify</h2></Link>
                <ul>
                    <li><NavLink to="products">Furniture</NavLink></li>
                    <li><NavLink to="cart">Cart</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header