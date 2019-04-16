import React, { Component } from 'react';

class Recipe extends Component {
    render() {

        let {info} = this.props
        let ingredients = info.ingredients

        const ingredientsList = ingredients.map((ingredientList) => {
        return (<li> {ingredientList} </li> )
            })

        return ( <div>
                    <h1> {info.title} </h1>
                    <img src={info.picture} alt={info.title} height="350" width="350" />
                    <p> <b>Ingredients:</b> {info.ingredients} </p>
                    <ul>
                        {ingredientsList}
                    </ul>
                    <p> <b> Recipe: </b> {info.instructions} </p>

                </div>
        );
    }
}

export default Recipe