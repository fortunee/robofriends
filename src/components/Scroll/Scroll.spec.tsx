import { shallow } from 'enzyme';
import React from 'react';

import Scroll from './Scroll';

it('Should render a Scroll component', () => {
  expect(shallow(<Scroll />).debug()).toMatchSnapshot();
});
