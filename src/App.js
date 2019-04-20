import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList';
import json from './recipelist.json';
import RecipeForm from './RecipeForm';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {theList: []};
  }


  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    this.setState({theList: json})
  }

  // getRecipes = () => {
  //   return fetch('./recipelist.json') 
  //     .then(response => console.log(response)
  //     .then(response => response.json())
  // }

  // getRecipes = () => {
  //   return fetch('../public/recipelist.json')
  //     .then(response => console.log(response))
  //     .then(response => response.json())
  //     //.then(jobs => this.setState({jobs}))
  // }




  postRecipe = (recipe) => {
    let {theList} = this.state;
    theList.unshift(recipe);
    return this.setState({theList});
  }

  render() {

    let {theList} = this.state
    
    return (
      <div className="App">
        <RecipeList key={json.id} theList={theList} />
        <RecipeForm postRecipe={this.postRecipe} />
      </div>
    );
  }
}

export default App;
