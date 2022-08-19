import React from 'react'

const Button = ({ children, version, type, isDisabled }) => {
    return (
        <button 
            type={type} 
            className={`btn btn-${version}`} 
            disabled={isDisabled}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false, 
}

export default Button