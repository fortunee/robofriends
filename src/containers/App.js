import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Loading from '../components/Loading';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';

import { requestRobots, setSearchField } from '../actions';

import './App.css';

const App = (props) => {
  const {
    searchField,
    onSearchChange,
    onRequestRobots,
    robots,
    isPending,
  } = props;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = robots.filter((rob) =>
    rob.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return isPending ? (
    <Loading />
  ) : (
    <div className="tc">
      <h1 className="f1">Robo friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  isPending: state.requestRobots.isPending,
  robots: state.requestRobots.robots,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
  onRequestRobots: (e) => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
