import React, { Component } from 'react';
import './App.scss';
import { Reservations } from '../Reservations/Reservations.js';
import { fetchReservations, postReservation } from '../apiCalls/apiCalls.js';
import Form from '../Form/Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }
  
  getReservations() {
    fetchReservations()
      .then(data => this.setState({reservations: data}))
      .catch(error => console.log(error))
  }

  addReservation = (newReservation) => {
    postReservation(newReservation)
      .then(data => this.setState({reservations: [...this.state.reservations, data]}))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getReservations();
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservationData={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
