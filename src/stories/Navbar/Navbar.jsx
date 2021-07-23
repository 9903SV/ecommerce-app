/* eslint-disable */

import {LogoutButton} from '../Button/Button.stories'
import PropTypes from 'prop-types'
import './Navbar.css'

export const Navbar = props => {
  const {logoUrl, link1, link2, link3} = props

  return (
    <div className="navbar-container">
      <img src={logoUrl} className="navbar-logo" />
      <div>
        <a className="navbar-link">{link1}</a>
        <a className="navbar-link">{link2}</a>
        <a className="navbar-link">{link3}</a>
        <LogoutButton text="Logout" />
      </div>
    </div>
  )
}

Navbar.PropTypes = {
  logoUrl: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
}

Navbar.defaultProps = {
  logoUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
  link1: 'Home',
  link2: 'Products',
  link3: 'Cart',
}
