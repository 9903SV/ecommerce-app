/* eslint-disable */
import PropTypes from 'prop-types'
import './Button.css'

export const Button = ({text, backgroundColor, ...props}) => <button {...props} style={backgroundColor && {backgroundColor}} className={(['storybook-button', `storybook-button-${text.toLowerCase().replace(' ', '')}`].join(' '))} type="button">{text}</button>

Button.propTypes = {
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
}

Button.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
}  