import { render, mount } from 'enzyme';
import React from 'react';
import * as redux from 'react-redux';
import { SearchBox } from '../components';

import App from './App';

describe('App', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('Should render App snapshot', () => {
    useDispatchMock.mockReturnValue({
      robots: [],
      searchField: '',
    })
    useSelectorMock.mockReturnValue({
      robots: [],
      searchField: '',
    });
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  })

  it('Should render loading component if request is pending', () => {
    useSelectorMock.mockReturnValue({
      robots: [],
      isPending: true,
    });

    const component = render(<App />);
    expect(component.text()).toEqual('Loading...');
  })

  it('Should call dispatch', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue({
      robots: [{
        id: 1,
        name: 'Jane',
        username: 'jdoe',
        email: 'jane@doe'
      }],
      searchField: '',
      isPending: true,
    });

    expect(dummyDispatch).not.toHaveBeenCalled();
    mount(<App />);
    expect(dummyDispatch).toHaveBeenCalled();
  });

  it('should call searchChange', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue({
      robots: [],
      searchField: ''
    });

    const component = mount(<App />);
    const SearchBoxWrapper = component.find(SearchBox).find('input[type="search"]');
    expect(SearchBoxWrapper.length).toEqual(1)
    const mockedEvent = { target: { value: 'something'} };
    SearchBoxWrapper.simulate('change', mockedEvent);
  })
})