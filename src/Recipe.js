import React, { Component } from 'react';

class Recipe extends Component {
    render() {

        let {info} = this.props
        console.log(info)

        return ( <div>
                    <h1> {info.title} </h1>
                    <p>pic</p>
                    <p> <b>Ingredients:</b> {info.ingredients} </p>
                    <ul>
                        <li>ing</li>
                        <li>ing</li>
                        <li>ing</li>
                    </ul>
                    <p> <b> Recipe: </b> {info.instructions} </p>

                </div>
        );
    }
}

export default Recipe