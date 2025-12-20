import React from 'react'
import './UserCard.css'
import user from '../assets/user.jpeg'


const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={props.image} alt={props.name}/>
        <p id='user-des'>{props.desc}</p>
    </div>
  )
}

export default UserCard
