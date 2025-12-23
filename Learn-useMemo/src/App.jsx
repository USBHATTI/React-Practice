import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  let douebleValue = useMemo(() => expensiveComputation(number), [number])

  function expensiveComputation(num) {
    console.log("Computing...")
    for(let i = 0; i < 1000000000; i++) {

    }
    return num * 2

    
  }

  function handleClick() {
    setCount(count + 1)
  }


  return (
    <div>
      <h1>useMemo Hook : {count}</h1>
      <button onClick={handleClick}> Click Me </button>
      <br />
      <input type="number" placeholder='enter number' value={number} onChange={(e)=> setNumber(e.target.value)}/>
      <br />
      <p> Double : {douebleValue}</p>
    </div>
  )
}

export default App
