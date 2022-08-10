import React from 'react'
import './Button.css'

const Button = ({copy}) => {
  return (
    <div className='button'>
        <p className='button-copy'>{copy}</p>
    </div>
  )
}

export default Button