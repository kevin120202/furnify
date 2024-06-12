import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Living from './pages/Living/Living'
import Dining from './pages/Dining/Dining'
import Bedroom from './pages/Bedroom/Bedroom'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='living' element={<Living />} />
                    <Route path='dining' element={<Dining />} />
                    <Route path='bedroom' element={<Bedroom />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
