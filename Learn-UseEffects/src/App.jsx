import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'
import DataFetcher from './components/DataFetcher'

function App() {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(count + 1)
//   }
//   const [total, setTotal] = useState(0)
  
//   const handletotal = () => {
//     setTotal(total + count)
//   }

// // // variation -- 1
// // useEffect(() => {
// //   alert("i will run on each render")
  
// // })

// // // variation -- 2
// // useEffect(() => {
// //   alert("i will run only once on initial render")

// // }, [])

// // // variation -- 3
// // useEffect(() => {
// //   alert(`Count has been updated to: ${count}`)

// // }, [count])


// // //varuation -- 4 : 
// // useEffect(() => {
// //   alert(`Count is: ${count} and Total is : ${total}`)

// // }, [count, total])


// //variation -- 5 : cleanup function
// useEffect(() => {
//   alert(`Count is: ${count}`)

//   return () => {
//     alert(`Cleanup: Count was ${count}`)
//   }
// }, [count])





  return (
    <>
      {/* <button onClick={handleClick}> Click me</button>
      <br />
      <h1>Clicked: {count}</h1>

      <button onClick={handletotal}> Click me to show sum : </button>
      <br />
      <h1>Clicked: {total}</h1> */}


      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <ResizeComponent /> */}\
      {/* <MultiEffectComponent /> */}
      <DataFetcher/>
    </>
  )
}

export default App
