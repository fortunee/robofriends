import { shallow, mount } from 'enzyme';
import React from 'react';

import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  const component = shallow(<ErrorBoundary />);

  it('Should render a ErrorBoundary component', () => {
    expect(component.debug()).toMatchSnapshot();
  });
  
  it('Should show error text when component has an error', () => {
    const ChildComponent = () => null;
    const component = mount(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );
    const error = new Error();
    component.find(ChildComponent).simulateError(error);
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
})
