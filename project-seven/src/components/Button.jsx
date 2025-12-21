import React from 'react'

const Button = ({handleColor}) => {
  return (
    <div>
        <button onClick={(e) => {
            e.stopPropagation();
            handleColor();}}>Click Me</button>
    </div>
  )
}

export default Button
