/* eslint-disable */
import {NavbarMain} from '../Navbar/Navbar.stories'
import { ShopnowButton } from '../Button/Button.stories'
import './HomeRoute.css'

export const HomeRoute = () => {
    return (
        <div>
            <NavbarMain logoUrl="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" link1='Home' link2='Products' link3='Cart' />
            <div className="home-container">
                <div className="home-content">
                    <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                        alt="clothes that get you noticed"
                        className="home-mobile-img"
                    />
                    <p className="home-description">
                    Fashion is part of the daily air and it does not quite help that it
                    changes all the time. Clothes have always been a marker of the era and
                    we are in a revolution. Your fashion makes you been seen and heard
                    that way you are. So, celebrate the seasons new and exciting fashion
                    in your own way.
                    </p>
                    <ShopnowButton text="Shop Now" />
                </div>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                    alt="clothes that get you noticed"
                    className="home-desktop-img"
                />
            </div>
        </div>
    )
}