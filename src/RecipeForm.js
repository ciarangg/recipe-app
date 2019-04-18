import React, { Component } from 'react';


let theNewRecipe = {
    title: "",
    picture: "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg",
    instructions: "",
    ingredients: ""
}

class RecipeForm extends Component {


    constructor(props){
        super(props)
        this.state = {
            newRecipe: {...theNewRecipe}
        }
    }

    // handleChange = (event) => {

    //     const elJobo = this.state.newJob;

    //     elJobo[event.target.name] = event.target.value

    //     this.setState({newJob: elJobo})

    //     console.log(this.state)

    //     console.log(this.state.newJob)
   
    // }

    

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.postJob(this.state.newJob)
    // }

    render() {

        let {newRecipe} = this.state

        console.log(newRecipe)
        

        return (
            <form className="recipe-form" onSubmit={this.handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title" value="Mac and Cheese" onChange={this.handleChange} />
                <br />
                <label>Ingredients: </label>
                <input type="text" name="title" value="Macaroni, Cheese" onChange={this.handleChange} />
                <br />
                <label>Instructions: </label>
                <input type="text" value="Boil macaroni..." onChange={this.handleChange} />
                <br />
                <input type="submit" name="submit" value="Submit" onChange={this.handleChange} />
            </form>
        );
    }
}

export default RecipeForm