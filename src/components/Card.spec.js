import { shallow } from 'enzyme';
import React from 'react';

import Card from './Card';

it('Should render a Card component', () => {
  expect(shallow(<Card />).debug()).toMatchSnapshot();
});
