import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Loading from './Loading';
import Scroll from './Scroll';

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
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
