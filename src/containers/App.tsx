import React, { ChangeEvent, useEffect } from 'react';
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

export interface RobotProps {
  id: number;
  name: string;
  email: string;
  username?: string;
}

export interface RobotsState {
  robots: Array<RobotProps>;
  isPending: boolean;
  error: string;
}

export interface SearchFieldState { searchField: string }

export interface State {
  searchRobots: SearchFieldState;
  requestRobots: RobotsState;
}

const App = () => {
  const dispatch = useDispatch();
  const { searchField, robots, isPending, hasError } = useSelector(
    (state: State) => ({
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      hasError: state.requestRobots.error,
    })
  );

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchField(e.target.value));

  const filteredRobots = robots.filter((robot: RobotProps) =>
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
