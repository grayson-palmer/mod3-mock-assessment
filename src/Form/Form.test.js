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
    const startState = { reservations: []}
    wrapper.setState(startState);
    wrapper.instance().resetInputs();
    expect(wrapper.state('name')).toEqual('');
    expect(wrapper.state('date')).toEqual('');
    expect(wrapper.state('time')).toEqual('');
    expect(wrapper.state('number')).toEqual('');
  })

  it ('should call the add reservation function on button click', () => {
    wrapper.find('.form__button').simulate('click')
    expect(wrapper.addReservation).toHaveBeenCalled();
  })
})