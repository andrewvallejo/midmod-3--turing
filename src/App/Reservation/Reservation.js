import React from 'react'
import Card from '../Card/Card'
import './Reservation.css'

const Reservation = ({resyInfo}) => {
  const reservationCards = resyInfo.map(res => {
    return (
      <Card
        number={res.number}
        name={res.name}
        date={res.date}
        time={res.time}
        id={res.id}
        key={res.id}
      />
    )
  })
  return (
    <section className="resy-container">    
    {reservationCards}
    </section>
  )
}

export default Reservation