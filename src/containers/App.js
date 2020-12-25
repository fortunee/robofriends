import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Loading from '../components/Loading';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';

import { setSearchField } from '../actions';

import './App.css';

const App = (props) => {
  const [robots, setRobots] = useState([]);
  const { searchField, onSearchChange } = props;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setRobots(data));
  }, []);

  const filteredRobots = robots.filter((rob) =>
    rob.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  return !robots.length ? (
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
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
