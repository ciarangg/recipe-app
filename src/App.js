import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './RecipeList';





class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeList />
      </div>
    );
  }
}

export default App;
