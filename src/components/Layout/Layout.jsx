import React from 'react'
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import Header from "../header/Header"

function Layout() {
    return (
        <main>
            <Header />
            <div className="main-content">
                <Outlet />
            </div>
        </main>
    )
}

export default Layout