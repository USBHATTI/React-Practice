import './App.css'
import { useState } from 'react'
import Button from './components/Button'

function App() {
  // function handleClick() {
  //   alert('Button Clicked!')
  // }
  function hangleMouseOver() {
    alert('Mouse Over Event Triggered!')
  }
  function handleChange(event) {
    console.log('Input Changed:', event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    alert('Form Submitted!')
  }

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)

  }
  function handleChangeColor() {
    //set rgb color randomly to div
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black']
    //chnage bg of divColor randomly
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.querySelector('.divColor').style.backgroundColor = randomColor
  }


  return (
    <>
      {/*Event Handling */}
      {/* <button onClick={handleClick}> Click me </button> */}

      {/* <p onMouseOver={hangleMouseOver}>
        Hover over me!
      </p>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type='submit'> Submit </button>
      </form> */}

      <div className='divColor' onClick={handleClick} style={{ border: '1px solid black' }}>
        <h1>{count}</h1>
        <p>Onclick managa by e.Propagation </p>
        <Button handleColor={handleChangeColor}/>
        
      </div>



    </>
  )
}

export default App
