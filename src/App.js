import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import recipelist from './recipelist.json'
import RecipeList from './RecipeList';





class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeList json={recipelist} />
      </div>
    );
  }
}

export default App;
