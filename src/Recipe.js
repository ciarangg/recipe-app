import React, { Component } from 'react';

class Recipe extends Component {
    render() {

        
        // let {json} = this.props
        // console.log(json)

        return ( <div>
                    <h1> title </h1>
                    <p>pic</p>
                    <p> <b>Ingredients:</b> </p>
                    <ul>
                        <li>ing</li>
                        <li>ing</li>
                        <li>ing</li>
                    </ul>
                    <p> <b> Recipe: </b> rec </p>

                </div>
        );
    }
}

export default Recipe