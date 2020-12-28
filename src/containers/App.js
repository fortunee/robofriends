import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CardList,
  ErrorBoundary,
  Header,
  Loading,
  SearchBox,
  Scroll,
} from '../components';

import { requestRobots, setSearchField } from '../actions';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { searchField, robots, isPending, hasError } = useSelector((state) => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    hasError: state.requestRobots.error,
  }));

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const onSearchChange = (e) => dispatch(setSearchField(e.target.value));

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return isPending || hasError ? (
    <Loading />
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

export default App;
