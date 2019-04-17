import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        let {ingredient} = this.props

        return ( 
                <dd>
                    {ingredient}
                </dd>
        );
    }
}

export default Recipe