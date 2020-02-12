import React, { Component } from 'react';
import './App.scss';
import { Reservations } from '../Reservations/Reservations.js';
import { fetchReservations } from '../apiCalls/apiCalls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  getReservations() {
    fetchReservations()
      .then(data => this.setState({reservations: data}))
  }

  componentDidMount() {
    this.getReservations();
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations reservationData={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
