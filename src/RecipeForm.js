import React, { Component } from 'react';

class RecipeForm extends Component {
    render() {
        

        return ( 
            <form className="recipe-form">
                <label>Title:</label>
                <input type="text" name="title" value="Mac and Cheese" />
                <br />
                <label>Instructions:</label>
                <input type="text" value="Boil macaroni..." />
            </form>
        );
    }
}

export default RecipeForm