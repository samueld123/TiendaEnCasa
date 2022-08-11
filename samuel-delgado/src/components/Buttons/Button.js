import React from 'react'
import './Button.css'

const Button = ({copy, able=true}) => {
  return (
    <div className={`button ${able ? "clickable":null}`}>
        <p className='button-copy'>{copy}</p>
    </div>
  )
}

export default Button