import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        let {json} = this.props
        let firstObject = json[0]
        console.log(firstObject.picture)
        return ( <div>
                    <h1> {firstObject.title} </h1>
                    <img src={firstObject.picture} alt={firstObject.title} />
                    <p> <b>Ingredients:</b> </p>
                    <ul>
                        <li>{firstObject.ingredients}</li>
                        <li>{firstObject.ingredients}</li>
                        <li>{firstObject.ingredients}</li>
                    </ul>
                    <p> <b> Recipe: </b> {firstObject.instructions} </p>

                </div>
        );
    }
}

export default Recipe