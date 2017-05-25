import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component{
  constructor(props) {
    super(props);
    // have to do this when you add methods
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    //getInitalState <- other way instead of es6 classes
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish){
    // better to make a copy of your state, then update it

    // make copy of state
    const fishes = {...this.state.fishes};
    // add our new fish
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish;
    //update our state
    this.setState({fishes});
    //set state
  }
  loadSamples(){
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key){
    // take a copy of our state
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({order});
  }

  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='hey' />
        </div>
        <ul className="list-of-fishes">
          {Object
            .keys(this.state.fishes)
            .map(key => <Fish key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)  
          }
        </ul>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;