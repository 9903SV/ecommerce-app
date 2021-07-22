/* eslint-disable */

import {Button} from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
}

const Template = args => <Button {...args} />

export const LogoutButton = Template.bind({})
LogoutButton.args = {
    text: 'Logout'
}

export const ShopnowButton = Template.bind({})
ShopnowButton.args = {
    text: 'Shop Now'
}

export const LoginButton = Template.bind({})
LoginButton.args = {
    text: 'Login'
}