import React, { Component } from 'react';
import Reservation from './Reservation/Reservation';
import menu from '../sample-data/menuData'
import reservations from '../sample-data/reservationData'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [reservations]
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
        <Reservation resyInfo={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
