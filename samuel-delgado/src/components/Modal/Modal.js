import React from 'react'

const Modal = ({ children, show, changeShow}) => {
    const handleChildClick = (e)=>{
        console.log(e.stopPropagation());
        changeShow()
    }
  return (
    <>
        {
            show ?
                <div className='curtain' onClick={handleChildClick}>
                    {children}
                </div>
                : null
        }
    </>
  )
}

export default Modal