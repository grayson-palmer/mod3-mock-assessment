import React from 'react';
import Reservations from './Reservations.js';
import { shallow } from 'enzyme';

describe('Form', () => {
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

  // beforeEach(() => {
  //   wrapper = shallow(<Reservations reservations={mockReservationData} />);
  // })

  it ('should be a snapshot of the form element', () => {
    wrapper = shallow(<Reservations reservations={mockReservationData} />);
    expect(wrapper).toMatchSnapshot();
  })

  
})