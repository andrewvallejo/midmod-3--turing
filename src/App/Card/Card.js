import React from 'react'
import './Card.css'

const Card = ({number, name, date, time, id, deleteResy}) => {
  return (
    <article className='card'>
      <h4>{name}</h4>
        <p>{date}</p>
        <p>{time}</p>
      <h3>Number of guests: {number}</h3>
      <button onClick={() => deleteResy(id)}>Cancel</button>
    </article>
  )
}

export default Card