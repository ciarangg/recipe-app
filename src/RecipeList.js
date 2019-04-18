import React, { Component } from 'react';
import Recipe from './Recipe';


class RecipeList extends Component {


    render() {

        let {theList} = this.props

        const recipes = theList.map((recipe) => {
            return (<Recipe key={recipe.title} info={recipe} /> )
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

