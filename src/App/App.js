import React, { Component } from 'react';
import Reservation from './Reservation/Reservation';
import Card from './Card/Card'
import menu from '../sample-data/menuData'
import reservations from '../sample-data/reservationData'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        
        </div>
        <div className='resy-container'>
        </div>
      </div>
    )
  }
}

export default App;
