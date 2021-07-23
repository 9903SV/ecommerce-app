/* eslint-disable */

import {Navbar} from '../Navbar/Navbar'
import './ProductRoute.css'

export const ProductsRoute = () => {
  return (
    <div>
      <Navbar />
      <div className="product-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          className="product-image"
        />
      </div>
    </div>
  )
}
