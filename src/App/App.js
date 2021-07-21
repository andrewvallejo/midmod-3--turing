import React, { Component } from 'react';
import Reservation from './Reservation/Reservation';
import Form from './Form/Form'
// import menu from '../sample-data/menuData'
import reservations from '../sample-data/reservationData'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: reservations
    }
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation]})
  }

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <Form addReservation={this.addReservation}/>
          <Reservation resyInfo={this.state.reservations}/>
      </main>
    )
  }
}

export default App;
