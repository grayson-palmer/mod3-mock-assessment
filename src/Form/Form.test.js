import React from 'react';
import Form from './Form.js';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper;
  const mockAddReservation = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form addReservation={mockAddReservation} />);
  })

  it ('should be a snapshot of the form element', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it ('should handle changes in the state', () => {
    const startState = {
      name: 'Grayson',
      date: '03/08',
      time: '8:00',
      number: 2
    }
    wrapper.setState(startState);
    wrapper.instance().resetInputs();
    expect(wrapper.state('title')).toEqual('');
  })
})