import React, { Component } from 'react';
import Reservation from './Reservation/Reservation';
import Form from './Form/Form'
import reservations from '../sample-data/reservationData'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: reservations
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(resyData => this.setState({reservations: resyData}))
  }

  addReservation = (newReservation) => {
    const currentReservations = [...this.state.reservations, newReservation]
    return fetch('http://localhost:3001/api/v1/reservations', {
      method: 'Post',
      body: JSON.stringify(newReservation),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(() => {
      this.setState({ reservations: currentReservations })
    })
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
