import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';
import AddForm from './form/AddFood';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedForm: false,
      foodsc: foods,
      query: '',
    };
  }
  oppenedForm = () => {
    let statusNow = this.state.openedForm;
    statusNow
      ? this.setState({ openedForm: false })
      : this.setState({ openedForm: true });
  };
  addFoodHandler = (theFood) => {
    //theFood:{name,numberOf Calories,image}
    const foodCopy = [...this.state.foodsc];
    console.log(foodCopy);
    foodCopy.push(theFood);
    this.setState({
      foodsc: foodCopy,
    });
  };
  handelFilter = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value, query: value });
  };
  render() {
    return (
      <>
        <div className="App">
          <input
            type="text"
            name=""
            value={this.state.name}
            onChange={(e) => this.handelFilter(e)}
          />

          <button onClick={this.oppenedForm}>Add new food</button>
          <div>
            {this.state.openedForm ? (
              <AddForm addFood={this.addFoodHandler} />
            ) : null}
          </div>
          {this.state.foodsc
            .filter((food) => {
              const sentence = this.state.query;
              var newsentence = sentence.charAt(0).toUpperCase();
              for (let i = 1; i < sentence.length; i++) {
                newsentence += sentence.charAt(i).toLowerCase();
              }
              if (food.name.startsWith(newsentence)) {
                return true;
              }
            })
            .map((e) => (
              <FoodBox {...e} />
            ))}
        </div>
      </>
    );
  }
}

export default App;
