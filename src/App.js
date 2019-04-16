import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import json from './recipelist.json'




class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeList theList={json} />
      </div>
    );
  }
}

export default App;
