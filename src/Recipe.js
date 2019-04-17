import React, { Component } from 'react';
import Ingredients from './Ingredients';

class Recipe extends Component {
    render() {

        let {info} = this.props
        let ingredients = info.ingredients

        const ingredientsList = ingredients.map((ingredient, i) => {
        return (<Ingredients key={ingredient[i]} ingredient={ingredient}/> )
            })

        return ( <div>
                    <h1> {info.title} </h1>
                    <img src={info.picture} alt={info.title} height="350" width="350" />
                    <dl>
                            <dt><b>Ingredients:</b></dt>
                            {ingredientsList}
                    </dl>
                    <p> <b> Recipe: </b> {info.instructions} </p>

                </div>
        );
    }
}

export default Recipe