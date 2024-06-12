import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../index.css"

function Layout() {
    return (
        <div className='site-container'>
            <Header />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout