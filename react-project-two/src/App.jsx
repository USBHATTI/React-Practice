import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import user from './assets/user.jpeg'
import Counter from './components/Counter'
import Card from './components/Card'
import Button from './components/Button'
import Panel from './components/Panel'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  {/* state lifting */}
  const [inputName, setInputName] = useState('Umair Sajid')

  const [activeIndex, setActiveIndex] = useState(null); // 👈 start with none open

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="App">
      {/* <UserCard name="Umair Sajid" desc="desc1" image={user} />
      <UserCard name="Zubair Sajid" desc="desc2" image={user}  />
      <UserCard name="Sajid Sajid" desc="desc3" image={user} /> */}
      {/* <Counter /> */}
      {/* <Card className="custom-card">
        <h1>This is a card component</h1>
        <p>This card component is used to wrap other components or elements.</p>
      </Card> */}
      {/* <Button handle={handleClick} text="Click Me">
        <h1>Clicked {count} times</h1>
      </Button> */}


      {/* State Lifting */}
      {/* <Card title="Card1" inputName={inputName} setInputName={setInputName} />
      <Card title="Card2" inputName={inputName} setInputName={setInputName} />
      <p>and i parent class also changed as you see : {inputName}</p>

      <h2>Almaty, Kazakhstan</h2>

      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => handleToggle(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city.
      </Panel>

      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => handleToggle(1)}
      >
        The name comes from алма, the Kazakh word for "apple".
      </Panel> */}


      {/*IF ELSE
      TERNARY OP
      LOGICAL OPERATOR
      EARLY RETURN */}





    </div>
  )
}

export default App
