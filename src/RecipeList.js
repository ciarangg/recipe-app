import React, { Component } from 'react';
import Recipe from './Recipe';
import json from './recipelist.json'

class RecipeList extends Component {

    render() {


    console.log(json)


    const recipes = json.map((recipe) => {
        return (<Recipe key={recipe.id} info={recipe} /> )
        })


        return ( <div>
                    {recipes}
                </div>
        );
    }
}

export default RecipeList