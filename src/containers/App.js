import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Loading from '../components/Loading';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((robots) => this.setState({ robots }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter((r) =>
      r.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return !robots.length ? (
      <Loading />
    ) : (
      <div className="tc">
        <h1 className="f1">Robo friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
