import React, { Component } from 'react';


class RecipeForm extends Component {


    constructor(props){
        super(props)
        this.state = {
            newRecipe: {
                title: "",
                picture: "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg",
                instructions: "",
                ingredients: []
            }
        }
    }


    handleChange = (event) => {

        let daNewRecipe = this.state.newRecipe

        if (event.target.name === "ingredients") {
            let ingredientArray = event.target.value.split(" ");
            daNewRecipe.ingredients = ingredientArray
        }

        else {
            daNewRecipe[event.target.name] = event.target.value
        }

        this.setState({newRecipe: daNewRecipe})
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let {postRecipe} = this.props
        postRecipe(this.state.newRecipe)
    }

    render() {

        let {newRecipe} = this.state


        return (
            <form className="recipe-form" onSubmit={this.handleSubmit}>
                <label><b>Title:</b> </label>
                <input type="text" name="title"  onChange={this.handleChange} />
                <br />
                <label><b>Picture</b> (Optional, must be url) </label>
                <input type="text" name="picture"  onChange={this.handleChange} />
                <br />
                <label><b>Ingredients:</b>  (A space between each ingredient) </label>
                <input type="text" name="ingredients"  onChange={this.handleChange} />
                <br />
                <label><b>Instructions:</b> </label>
                <input type="text" name="instructions"  onChange={this.handleChange} />
                <br />
                <input type="submit" name="submit" value="Submit" onChange={this.handleChange} />
            </form>
        );
    }
}

export default RecipeForm
