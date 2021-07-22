/* eslint-disable */

import {SigninForm} from './SigninForm'

export default {
  title: 'SigninForm',
  component: SigninForm,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
}

const Template = args => <SigninForm {...args} />

export const SigninFormInitial = Template.bind({})
SigninFormInitial.args = {
    usernameValue: '',
    passwordValue: '',
    errorMsg: ''
}

export const SigninFormInvalidUser = Template.bind({})
SigninFormInvalidUser.args = {
    usernameValue: 'test',
    passwordValue: 'test',
    errorMsg: 'Username is not found'
}

export const SigninFormWrongPassword = Template.bind({})
SigninFormWrongPassword.args = {
    usernameValue: 'rahul',
    passwordValue: 'test',
    errorMsg: `Username and Password didn't match`
}

export const SigninFormEmptyUsername = Template.bind({})
SigninFormEmptyUsername.args = {
    usernameValue: '',
    passwordValue: 'test',
    errorMsg: `Username or password is invalid`
}

export const SigninFormEmptyPassword = Template.bind({})
SigninFormEmptyPassword.args = {
    usernameValue: 'test',
    passwordValue: '',
    errorMsg: `Username or password is invalid`
}