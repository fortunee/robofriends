import { shallow } from 'enzyme';
import React from 'react';

import Loading from './Loading';

it('Should render a Loading component', () => {
  expect(shallow(<Loading />).debug()).toMatchSnapshot();
});
