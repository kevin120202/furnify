import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import "../../index.css"

function Layout() {
    return (
        <div className='site-container'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout