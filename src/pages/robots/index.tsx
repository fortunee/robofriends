import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestRobots } from '../../actions';
import { CardList, ErrorBoundary, Loading } from '../../components';
import { RobotProps, State } from '../../containers/App';

const Robots = () => {
  const dispatch = useDispatch();
  const { searchField, robots, isPending } = useSelector((state: State) => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    hasError: state.requestRobots.error,
  }));

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  const filteredRobots = robots.filter((robot: RobotProps) =>
    robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return isPending ? (
    <Loading />
  ) : (
    <ErrorBoundary>
      <CardList robots={filteredRobots} />
    </ErrorBoundary>
  );
};

export default Robots;
