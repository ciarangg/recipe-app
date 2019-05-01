import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList';
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
    return fetch('./recipelist.json')
      .then(response => response.json())
      .then(theList => this.setState({theList}))
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
        <RecipeList key={theList.id} theList={theList} />
        <RecipeForm postRecipe={this.postRecipe} />
      </div>
    );
  }
}

export default App;
