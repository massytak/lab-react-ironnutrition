import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import TodaysFood from '../TodaysFood';
let newarry = [];
class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totale: 1,
      listFood: [],
    };
  }

  addToList = (event) => {
    console.log(event.name);
    if (newarry.length > 0) {
      console.log('je suis dans la boucle newarry',newarry);
      for (let i = 0; i < newarry.length; i++) {
        
        if (event.name === newarry[i].name) {
          console.log('eventnewarry[i].valuename',newarry[i].value);
        console.log('this.  state.totale',this.state.totale);
          newarry[i].value=
          parseInt(newarry[i].value)
          +  parseInt(this.state.totale)
          break;
        } else {
          newarry.push({
            name: `${event.name}`,
            calories: `${event.calories}`,
            value: `${this.state.totale}`,
          });
          break;
        }
      }
    }


    if (newarry.length <= 0) {
      newarry.push({
        name: `${event.name}`,
        calories: `${event.calories}`,
        value: `${this.state.totale}`,
      });
    }
    console.log('new arry', newarry);

    this.props.listFood(newarry);
    // this.setState({
    //   listFood: newarry,
    // });
  };
  handlChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box columns">
        <div className="column">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.image} alt="img" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{this.props.name}</strong> <br />
                  <small>{this.props.calories} Cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    name="totale"
                    value={this.state.totale}
                    onChange={(e) => this.handlChange(e)}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => this.addToList(this.props)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default FoodBox;
