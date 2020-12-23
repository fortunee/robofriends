import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Loading from '../components/Loading';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';

import './App.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setRobots(data));
  }, []);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredRobots = robots.filter((r) =>
    r.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
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

export default App;
