import { shallow } from 'enzyme';
import React from 'react';

import SearchBox from './SearchBox';

it('Should render a SearchBox component', () => {
  const searchChange = jest.fn();
  expect(
    shallow(<SearchBox searchChange={searchChange} />).debug()
  ).toMatchSnapshot();
});
