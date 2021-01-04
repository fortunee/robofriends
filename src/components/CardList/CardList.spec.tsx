import { shallow } from 'enzyme';
import React from 'react';

import CardList from './CardList';

it('Should render a CardList component', () => {
  const mockData = [
    {
      id: 1,
      name: 'Jane Doe',
      username: 'jdoe',
      email: 'jane@doe.random'
    }
  ]
  expect(shallow(<CardList robots={mockData} />).debug()).toMatchSnapshot();
});
