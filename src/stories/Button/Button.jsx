/* eslint-disable */
import PropTypes from 'prop-types'
import './Button.css'

export const Button = props => {
  const {text, backgroundColor, color, ...rest} = props
  return (
    <button
      {...rest}
      style={backgroundColor && {backgroundColor}}
      style={color && {color}}
      className={[
        'storybook-button',
        `storybook-button-${text.toLowerCase().replace(' ', '')}`,
      ].join(' ')}
      type="button"
    >
      {text}
    </button>
  )
}

Button.PropTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
}

Button.defaultProps = {
  backgroundColor: '#0967d2',
  color: '#ffffff',
  text: 'Button',
  onClick: undefined,
}
