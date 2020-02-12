import React, { Component } from 'react';
import './Form.scss';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  resetInputs() {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (<div className='form'>
      <input 
        name='name'
        type='text'  
        placeholder='Name' 
        className='form__name'
        onChange={ e => {this.handleChange(e)}}
      />
      <input 
        name='date'
        type='text' 
        placeholder='Date (mm/dd)' 
        className='form__name'
        onChange={ e => {this.handleChange(e)}}
      />
      <input 
        name='time'
        type='text' 
        placeholder='Time' 
        className='form__name'
        onChange={ e => {this.handleChange(e)}}
      />
      <input 
        name='number'
        type='text' 
        placeholder='Number of Guests' 
        className='form__name'
        onChange={ e => {this.handleChange(e)}}
      />
      <button 
        type='button' 
        className='form__button'
        onClick={() => {
          this.props.addReservation(this.state)
          this.resetInputs()}}>
            Make Reservation
        </button>
    </div>
    )
  }
}