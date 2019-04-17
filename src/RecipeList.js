import React, { Component } from 'react';
import Recipe from './Recipe';
import RecipeForm from './RecipeForm';


class RecipeList extends Component {


    render() {

        let {theList} = this.props

        console.log(theList)

        const recipes = theList.map((recipe) => {
            return (<Recipe key={recipe.id} info={recipe} /> )
        })

        return ( <div>
                    {recipes}
                    <RecipeForm />
                </div>
        );
    }
}

export default RecipeList

