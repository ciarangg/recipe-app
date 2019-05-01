import React, { Component } from 'react';
import Recipe from './Recipe';
import DeleteButton from './DeleteButton'


class RecipeList extends Component {


// deleteRecipe(id) {
//     const deleteURL = APIURL + id;
//     fetch(deleteURL, {
//       method: "delete"
// })


    render() {

        let {theList} = this.props

        let recipes = theList.map((recipe) => {
            return (<div id={recipe.title}><Recipe key={recipe.title} info={recipe} /> <DeleteButton /></div>)
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

