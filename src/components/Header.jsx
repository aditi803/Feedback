import React from 'react'
import propsTypes from 'prop-types'

const Header = ({text, bgColor, textColor}) => {
  const HeaderStyled = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <header style={HeaderStyled}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: "#ff6a95"
}

Header.propsTypes ={
    text: propsTypes.string,
    bgColor: propsTypes.string,
    textColor: propsTypes.string
}

export default Header