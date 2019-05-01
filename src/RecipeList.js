import React, { Component } from 'react';
import Recipe from './Recipe';


class RecipeList extends Component {

    handleDelete = (event) => {
        event.preventDefault();
        let {deleteRecipe} = this.props
        deleteRecipe(event.target.id)
    }

    handleEdit = (event) => {
        event.preventDefault();
        let {editRecipe} = this.props
        // deleteRecipe(event.target.id)
    }


    render() {

        let {theList} = this.props

        let recipes = theList.map((recipe) => {
            return (<div id={recipe.title}><Recipe key={recipe.title} info={recipe} /> <button id={recipe.title} onClick={this.handleDelete}> Delete</button> <button id={recipe.title} onClick={this.handleEdit}> Edit</button></div>)
        })

        return ( <div>
                    <h1><u>Our Recipes</u></h1>
                    {recipes}
                    <br />
                    <h1><u>Post Your Own Recipe</u></h1>
                </div>
        );
    }
}

export default RecipeList

