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

        //daNewRecipe[event.target.name] = event.target.value

        if (event.target.name === "title") {
            console.log("blerp")
            daNewRecipe.title = event.target.value
        }

        if (event.target.name === "instructions") {
            daNewRecipe.instructions = event.target.value
        }

        if (event.target.name === "ingredients") {
            daNewRecipe.ingredients = [event.target.value]
        }

        console.log(daNewRecipe)

        this.setState({newRecipe: daNewRecipe})

        //console.log(this.state.newRecipe)


   
    }

    

    handleSubmit = (event) => {
        event.preventDefault();
        let {postRecipe} = this.props
        postRecipe(this.state.newRecipe)
    }

    render() {

        // let someAhbject = {
        //     title: "dvwd",
        //     picture: "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg",
        //     instructions: "dsvs",
        //     ingredients: ["aha", "farts"]
        // }

        // let {postRecipe} = this.props

        // console.log(postRecipe)

        // for(let i=0; i < 1; i++ ) {
        //     postRecipe(someAhbject)
        // }
       


        
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