import React, { Component } from 'react';


// let theNewRecipe = {
//     title: "",
//     picture: "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg",
//     instructions: "",
//     ingredients: []
// }

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


        if (event.target.name === "title" || event.target.name === "instructions") {
            daNewRecipe[event.target.name] = event.target.value
        }

        if (event.target.name === "ingredients") {
            let ingredientArray = event.target.value.split(" ");

            daNewRecipe.ingredients = ingredientArray
        }

        this.setState({newRecipe: daNewRecipe})
    }

    

    handleSubmit = (event) => {
        event.preventDefault();
        let {postRecipe} = this.props
        postRecipe(this.state.newRecipe)
    }

    render() {


        return (
            <form className="recipe-form" onSubmit={this.handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title"  onChange={this .handleChange} />
                <br />
                <label>Ingredients: </label>
                <input type="text" name="ingredients"  onChange={this.handleChange} />
                <br />
                <label>Instructions: </label>
                <input type="text" name="instructions"  onChange={this.handleChange} />
                <br />
                <input type="submit" name="submit" value="Submit" onChange={this.handleChange} />
            </form>
        );
    }
}

export default RecipeForm