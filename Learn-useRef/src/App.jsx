import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { flushSync } from 'react-dom'

function App() {
  const [count, setCount] = useState(0)
  let val = useRef(0)

  let timer = useRef(null)

  function handleStart() {
    timer.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
  }

  function handleStop() {
    clearInterval(timer.current)
    timer.current = null
  }

  function handleReset() {
    clearInterval(timer.current)
    setCount(0)
    console.log("Timer Reset", timer.current)
  }






  // function handleClick() {
  //   val.current = val.current + 1
  //   console.log("Val is: ", val.current)
  //   setCount(count + 1)
  //   console.log("Clicked ", count + 1)
  // }

  // useEffect(() => {
  //   console.log("I will run on every render")
  
  // })
  

  return (
    <div>
      <p>Timer : {count}</p>
      <br />
      <button onClick={handleStart}> Start </button>
      <br />
      <br />
      <button onClick={handleStop}> Stop </button>
      <br />
      <br />
      <button onClick={handleReset}> Reset </button>
    </div>



    // <div>
    //   <button onClick={handleClick}> CLICK ME </button>
    //   <p>Count is: {count}</p>
    // </div>
    
  )
}

export default App
