import React from 'react'
import { useParams } from 'react-router-dom'

const ParamsComp = () => {
    const {id} = useParams();
  return (
    <div>
        <h1>Params Component Page</h1>
        <h2>Id is: {id}</h2>

    </div>
  )
}

export default ParamsComp
