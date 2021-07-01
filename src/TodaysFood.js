import React, { Component } from 'react';

class TodaysFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalcal: Number(0),
      listFood: '',
    };
  }
  countTotale = (list) => {
    console.log('list de sortie',list);
    // for (let i = 0; i < this.props.foodadd; i++) {
    //   this.props.foodadd[i].calories;
    // }
  };
  notRepeat=(arrayOfObject)=>{
    arrayOfObject.map((e)=>{
      for(let i=0;i<arrayOfObject.length;i++){
        if(e.name===arrayOfObject[i].name){
          e.value+=arrayOfObject[i].value
        }
        return e.value
      }
      
    })

  }
  render() {
    let copyfoodadd=[...this.props.foodadd]
    return (
      <>
        <div className="column">
          <ul>
          
            {
            
            copyfoodadd.map((e) => (
              <>
              {()=>this.notRepeat(copyfoodadd)}
                <li>{e.value +'  '+e.name + '=' + e.calories*e.value}cal</li>
              </>
            ))}
          </ul>

       
        </div>
      </>
    );
  }
}

export default TodaysFood;
