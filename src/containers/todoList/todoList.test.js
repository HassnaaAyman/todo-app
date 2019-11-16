import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './todoList';

describe('<TodoList />', () => {
  test('renders', () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper).toMatchSnapshot();
  });
});
