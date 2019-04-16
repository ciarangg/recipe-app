import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        let {ingredient} = this.props

        return ( <li>
                    {ingredient}
                </li>
        );
    }
}

export default Recipe