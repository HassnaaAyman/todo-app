import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './addTodo';

describe('<AddTodo />', () => {
  test('renders', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper).toMatchSnapshot();
  });
});
