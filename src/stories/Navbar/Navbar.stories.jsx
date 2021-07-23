/* eslint-disable */

import {Navbar} from './Navbar'

export default {
  title: 'Navbar',
  component: Navbar,
}

const Template = args => <Navbar {...args} />

export const NavbarMain = Template.bind({})
NavbarMain.args = {
  logoUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
  link1: 'Home',
  link2: 'Products',
  link3: 'Cart',
}
