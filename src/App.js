import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import json from './recipelist.json'




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {recipeList: json};
  }

  render() {

    console.log(this.state)
      
    return (
      <div className="App">
        <RecipeList key={json.id} theList={json} />
      </div>
    );
  }
}

export default App;
