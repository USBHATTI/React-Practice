import './App.css'
import ChildA from './component/ChildA'
import { useState, useEffect, createContext } from 'react'

// export const UserContext = createContext()
export const themeContext = createContext()


function App() {
  const [theme, setTheme] = useState('light')
  // const [user, setUser] = useState({name: 'John Doe', age: 30})
  return (

    <themeContext.Provider value={{theme, setTheme}}>
      <div className='container' style={{backgroundColor:theme === 'light' ? 'beige':'black'}}>
        <ChildA />
      </div>
    </themeContext.Provider>
    // <>
    //   <UserContext.Provider value={user}>
    //     <ChildA />
    //   </UserContext.Provider>

      
    // </>
  )
}

export default App
