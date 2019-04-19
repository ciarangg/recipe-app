import React, { Component } from 'react';
import Ingredients from './Ingredients';

class Recipe extends Component {
    render() {

        let {info} = this.props
        let ingredients = info.ingredients

        let ingredientsList = ingredients.map((ingredient, i) => {
        return (<Ingredients key={ingredient[i]} ingredient={ingredient}/> )
            })

        return ( <div>
                    <h2>{info.title} </h2>
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