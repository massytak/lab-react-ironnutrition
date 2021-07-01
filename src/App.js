import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';
import AddForm from './form/AddFood';
import TodaysFood from './TodaysFood';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedForm: false,
      foodsc: foods,
      query: '',
      listFoods: [],
      totale: '0',
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

  addTolist = (ev) => {
    console.log('evvvvvvvvvvv', ev);
    const listCopyFood = [...ev];
    console.log('listcopyfoooooooooood', listCopyFood);
    let total = 0;
    for (let i = 0; i < ev.length; i++) {
      total += Number(ev[i].calories);
    }
    

    this.setState({
      listFoods: listCopyFood,
      totale: total,
    });
  };

  render() {
    return (
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
        <div className="columns">
          <div className="column">
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
                <FoodBox {...e} listFood={this.addTolist} />
              ))}
          </div>
          <div className="column">
            <h1>Today's food</h1>
            <TodaysFood foodadd={this.state.listFoods} />
            <p>
              Totale:
              {this.state.totale} calories
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
