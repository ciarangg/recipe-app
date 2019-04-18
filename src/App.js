import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeList from './RecipeList';
import json from './recipelist.json'
import RecipeForm from './RecipeForm';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {theList: json};
  }



  postRecipe = (recipe) => {
    let {theList} = this.state;
    theList.unshift(recipe);
    return this.setState({theList});
  }

  render() {

    let {theList} = this.state

    //console.log(theList)
      
    return (
      <div className="App">
        <RecipeList key={json.id} theList={theList} />
        <RecipeForm postRecipe={this.postRecipe} />
      </div>
    );
  }
}

export default App;
