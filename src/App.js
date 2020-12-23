import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: '',
    };
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((r) =>
      r.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1">Robo friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
