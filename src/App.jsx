import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState, createContext } from 'react'
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Products from "./pages/products/Products"
import Cart from "./pages/cart/Cart"
import ProductDetails from "./components/productDetail/ProductDetails"

const CartContext = createContext()

function App() {
    const [cart, setCart] = useState([
        {
            id: "kiki",
            name: "KIKI series",
            image: "kiki",
            price: 2799000,
            category: "bedroom",
            amaount: 1,
        }
    ])


    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="products" element={<Products />} />
                        <Route path="products/:id" element={<ProductDetails />} />
                        <Route path="cart" element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    )
}

export default App
export { CartContext }