import React, { Component } from 'react';

import { CardList } from './components/CardList';
import { Search } from './components/Search';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App self-center'>
        <div className="flex flex-col content-center">
        <div className="">
        <h1>Monsters Rolodex</h1>
        </div>
            <Search onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
        </div>

        );
  }
}

export default App;