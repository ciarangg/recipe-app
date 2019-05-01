import React, { Component } from 'react';

class DeleteForm extends Component {

    handleDelete = (event) => {
        event.preventDefault();
        let {deleteRecipe} = this.props
        deleteRecipe(event.target.id)
    }

    render() {


        return ( <div>
                    <button id={this.props.recipeTitle} onClick={this.handleDelete}> Delete</button> 
                </div>
        );
    }
}

export default DeleteForm