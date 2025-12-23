import { useState, useCallback } from 'react'

import './App.css'
import ChildComponent from './components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  const handleChild = useCallback(
    () => {
     setInput(prev => prev + 1)
     setCount(prev => prev + 1)
  },
    [input],
  )
  

  return (
    <div>
      <p> Count is : {count}</p>
      <button onClick={handleClick}> Increment </button>
      <br />

      <p>child : {input}</p>

      <ChildComponent buttonName = "Click me" handleChild={handleChild}/>

    </div>

    
   
  )
}

export default App
