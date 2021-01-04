import { shallow } from 'enzyme';
import React from 'react';

import Card from './Card';

it('Should render a Card component', () => {
  const props = {
    id: 1,
    name: 'Random Name',
    email: 'rand@om.name'
  }
  expect(shallow(<Card {...props} />).debug()).toMatchSnapshot();
});
