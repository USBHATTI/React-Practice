import React from 'react'

const ChildComponent = React.memo((props) => {
    console.log("Child render")
  return (
    <div>
        <button onClick={props.handleChild}>{props.buttonName}</button>


      
    </div>
  )
})

export default ChildComponent
