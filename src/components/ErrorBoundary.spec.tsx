import { shallow } from 'enzyme';
import React from 'react';

import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  it('Should render a ErrorBoundary component', () => {
    const component = shallow(<ErrorBoundary />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('Should show error text when component has an error', () => {
    const ChildComponent = () => null;
    const component = shallow(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );
    component.find(ChildComponent).simulateError(new Error());
    expect(component.state()).toEqual({ hasError: true });
    expect(component.text()).toEqual(
      'Oops!!! Something went wrong please reload the page'
    );
  });

  it('Should work as expected without errors', () => {
    const component = shallow(
      <ErrorBoundary>
        <h1>All good</h1>
      </ErrorBoundary>
    );
    expect(component.state()).toEqual({ hasError: false });
    expect(component.text()).toEqual('All good');
  });
});
