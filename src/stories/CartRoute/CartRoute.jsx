/* eslint-disable */

import { Navbar } from "../Navbar/Navbar"
import './CartRoute.css'

export const CartRoute = () => {
    return (
        <div>
            <Navbar />
            <div className="cart-container">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png" className="cart-image" />
            </div>
        </div>
    )
}