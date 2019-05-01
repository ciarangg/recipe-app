import React, { Component } from 'react';
import Recipe from './Recipe';
import EditForm  from './EditForm';
import DeleteForm  from './DeleteForm';

class RecipeList extends Component {


    render() {
        //console.log(this.props)

        let {theList} = this.props

        let recipes = theList.map((recipe) => {
            return (<div id={recipe.title}><Recipe key={recipe.title} info={recipe} /> 
            <br />
            {/* <button id={recipe.title} onClick={this.handleDelete}> Delete</button>  */}
            <DeleteForm recipeTitle={recipe.title} deleteRecipe={this.props.deleteRecipe} />
            <br />
            <EditForm editState={recipe} editRecipe={this.props.editRecipe} /></div>)
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

