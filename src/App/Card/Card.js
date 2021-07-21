import React from 'react'
import './Card.css'

const Card = ({number, name, date, time, id, deleteResy}) => {
  return (
    <article className='card'>
      <h4>{name}</h4>
        <p>{date}</p>
        <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button onClick={() => deleteResy(id)}>Cancel</button>
    </article>
  )
}

export default Card