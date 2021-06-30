import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './AddForm.css';
class AddForm extends Component {
  state = {
    openedForm: true,
    name: '',
    calories: Number,
    image: '',
    quantity: +'0',
  };
  handleFormSubmit = (event) => {
    event.preventDefault(); //annuler le refresh de la page
    //rajouter mes info dans food.json

    this.props.addFood(this.state);
    this.setState({
      name: '',
      calories: Number,
      image: '',
      quantity: +'0',
      openedForm: false,
    });
  };
  handleChange(event) {
    let { name, value } = event.target;

    // special case for checkboxes (where boolean value is hold in .checked property)

    this.setState({ [name]: value });
  }
  oppenedForm = () => {
    let statusNow = this.state.openedForm;
    console.log('le status actuell', statusNow);
    statusNow
      ? this.setState({ openedForm: false })
      : this.setState({ openedForm: true });
  };
  render() {
    return (
      <div>
        {this.state.openedForm ? (
          <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>

            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
            />

            <label>Number of calories:</label>

            <input
              type="number"
              name="calories"
              value={this.state.calories}
              onChange={(e) => this.handleChange(e)}
            />

            <label>Image:</label>

            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={(e) => this.handleChange(e)}
            />

            <button onClick={()=>this.oppenedForm}>Submit</button>
          </form>
        ) : null}
      </div>
    );

    // form will be added here!
  }
}

export default AddForm;
