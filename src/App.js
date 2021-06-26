import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';
import './App.css';

function App() {
  return (
    <div className="App">
     <FoodBox name={foods[0].name} calories={foods[0].calories} image={foods[0].image} />
     <FoodBox name={foods[1].name} calories={foods[1].calories} image={foods[1].image} />
     <FoodBox name={foods[2].name} calories={foods[2].calories} image={foods[2].image} />
     <FoodBox name={foods[3].name} calories={foods[3].calories} image={foods[3].image} />
     <FoodBox name={foods[4].name} calories={foods[4].calories} image={foods[4].image} />
     <FoodBox name={foods[5].name} calories={foods[5].calories} image={foods[5].image} />
    </div>
  );
}

export default App;
