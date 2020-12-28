import { shallow } from 'enzyme';
import React from 'react';

import Header from './Header';

it('Should render a Header component', () => {
  expect(shallow(<Header />).debug()).toMatchSnapshot();
});
