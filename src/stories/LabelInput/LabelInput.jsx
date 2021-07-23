/* eslint-disable */

import PropTypes from 'prop-types'
import './LabelInput.css'

export const LabelInput = props => {
  const {title, placeholder, type, value} = props
  return (
    <div className="label-input-container">
      <label className="label">{title}</label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}

LabelInput.PropTypes = {
  text: PropTypes.string.isRequired,
}

LabelInput.defaultProps = {
  text: 'USERNAME',
}
