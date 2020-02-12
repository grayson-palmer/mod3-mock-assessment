import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  const mockReservationData = [
    {
      id: 1,
      name: 'Christie',
      date: '12/29',
      time: '7:00',
      number: 12,
    }
  ]

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it ('should be a snapshot of the form element', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it ('should add a reservation to state', () => {
    wrapper.addReservation(mockReservationData)
    expect(wrapper.state).toEqual(mockReservationData)
  })
})
