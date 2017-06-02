import React, { Component } from 'react';
import Labirint from './labirint';

class App extends Component {
  constructor(props){
    super(props);
  }

  setName(){
    this.setState({a: "Привет React"});
  }
  
  render() {
    return (
      <div className="App">
        <Labirint />
      </div>
    );
  }
}

export default App;
