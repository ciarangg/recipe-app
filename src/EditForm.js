import React, { Component } from 'react';



class EditForm extends Component {


    constructor(props){
        super(props)
        this.state = {willEditRecipe: this.props.editState}
    }



    handleChange = (event) => {

        let daNewRecipe = this.state.willEditRecipe

        if (event.target.name === "ingredients") {
            let ingredientArray = event.target.value.split(" ");
            daNewRecipe.ingredients = ingredientArray
        }

        else {
            daNewRecipe[event.target.name] = event.target.value
        }

        this.setState({willEditRecipe: daNewRecipe})
    }


    handleSubmit = (event) => {
        event.preventDefault();

        let {editRecipe} = this.props

        editRecipe(this.state.willEditRecipe.title, this.state.willEditRecipe)
    }

    render() {

            console.log(this.props.editRecipe)

        return (
            <div>
            <p><b><u> Edit</u></b></p>
            <form className="recipe-form" onSubmit={this.handleSubmit}>
                <label><b>Title:</b> </label>
                <input type="text" name="title" value={this.state.willEditRecipe.title} onChange={this.handleChange} />
                <br />
                <label><b>Picture</b> (Optional, must be url) </label>
                <input type="text" name="picture" value={this.state.willEditRecipe.picture} onChange={this.handleChange} />
                <br />
                <label><b>Ingredients:</b>  (A space between each ingredient) </label>
                <input type="text" name="ingredients" value={this.state.willEditRecipe.ingredients}  onChange={this.handleChange} />
                <br />
                <label><b>Instructions:</b> </label>
                <input type="text" name="instructions" value={this.state.willEditRecipe.instructions} onChange={this.handleChange} />
                <br />
                <input type="submit" name="submit" value="Edit" onChange={this.handleChange} />
            </form>
            </div>
        );
    }
}

export default EditForm