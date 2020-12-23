import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Loading from './Loading';
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
    const filteredRobots = this.state.robots.filter((r) =>
      r.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase())
    );

    if (this.state.robots.length > 0) {
      return (
        <div className="tc">
          <h1 className="f1">Robo friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default App;
