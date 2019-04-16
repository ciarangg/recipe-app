import React, { Component } from 'react';
import Recipe from './Recipe';


class RecipeList extends Component {


    render() {

        let {theList} = this.props

        const recipes = theList.map((recipe) => {
            return (<Recipe key={recipe.id} info={recipe} /> )
        })

        return ( <div>
                    {recipes}
                </div>
        );
    }
}

export default RecipeList

