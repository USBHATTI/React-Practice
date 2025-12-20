import React from 'react'
import './Counter.css'

const Counter = () => {
    const[count, setCount] = React.useState(0);
  return (
    <div className='counter-container'>
        <p id='para'> you have clicked {count} using react</p>
        <button id='btn' onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default Counter
