import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
     movies: [],
     searchName: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({movies: user}));
  }

  handleChange = (e) => {
    this.setState({searchName: e.target.value});
  }

  render(){
    const {movies, searchName} = this.state;
    const filteredMovies = movies.filter(movie=>
      movie.name.toLowerCase().includes(searchName.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Movie Rockers</h1>
      <SearchBox 
        placeholder='search movie'
        handleChange={this.handleChange}
      />
      <CardList movies={filteredMovies} />
      </div>
    );
  }
}

export default App;
