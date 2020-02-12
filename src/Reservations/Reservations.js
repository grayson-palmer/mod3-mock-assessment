import React, { Component } from 'react';
import './Reservations.scss';

export const Reservations = (props) => {
  return props.reservations.map( ({ id, name, date, time, number }) => {
    return (
      <div className='reservation' key={ id }>
        <h3 className='reservation__name'>{ name }</h3>
        <p className='reservation__date'>{ date }</p>
        <p className='reservation__time'>{ time } PM</p>
        <p className='reservation__number'>Number of Guests: { number }</p>
        <button type='button' className='reservation__cancel'>Cancel</button>
      </div>
    )
  })
}