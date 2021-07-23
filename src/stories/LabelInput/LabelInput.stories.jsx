/* eslint-disable */

import {LabelInput} from './LabelInput'

export default {
  title: 'LabelInput',
  component: LabelInput,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
}

const Template = args => <LabelInput {...args} />

export const UsernameLabelInput = Template.bind({})
UsernameLabelInput.args = {
  title: 'USERNAME',
  placeholder: 'Username',
  value: '',
  type: 'text',
}

export const PasswordLabelInput = Template.bind({})
PasswordLabelInput.args = {
  title: 'PASSWORD',
  placeholder: 'Password',
  value: '',
  type: 'password',
}
