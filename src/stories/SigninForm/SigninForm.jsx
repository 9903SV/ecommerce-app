/* eslint-disable */

import {
  UsernameLabelInput,
  PasswordLabelInput,
} from '../LabelInput/LabelInput.stories'
import PropTypes from 'prop-types'
import './SigninForm.css'

export const SigninForm = ({errorMsg, usernameValue, passwordValue}) => {
  return (
    <div>
      <UsernameLabelInput
        title="USERNAME"
        placeholder="Username"
        type="text"
        value={usernameValue}
      />
      <PasswordLabelInput
        title="PASSWORD"
        placeholder="Password"
        value={passwordValue}
      />
      <p className="signin-form-error-msg">{errorMsg}</p>
    </div>
  )
}

SigninForm.PropTypes = {
  errorMsg: PropTypes.string.isRequired,
}

SigninForm.defaultProps = {
  errorMsg: '',
}
