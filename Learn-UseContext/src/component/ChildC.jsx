import React from 'react'
import { themeContext } from '../App'

const ChildC = () => {
    // const user = React.useContext(UserContext);
    const theme = React.useContext(themeContext);
    function handleTheme() {
        if(theme.theme === 'light') {
            theme.setTheme('dark')
        }
        else {
            theme.setTheme('light')}
    }
  return (
    <div>
        <button onClick={handleTheme}>
            Current Theme is {theme.theme}
        </button>
    </div>
  )
}

export default ChildC
