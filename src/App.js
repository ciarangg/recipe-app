import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import json from './recipelist.json'




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {theList: json};
  }

  render() {

    let {theList} = this.state
      
    return (
      <div className="App">
        <RecipeList key={json.id} theList={theList} />
      </div>
    );
  }
}

export default App;
