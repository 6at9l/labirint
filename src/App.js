import React, { Component } from 'react';
import Qwerty from './Test';
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
        <Qwerty />
      </div>
    );
  }
}

export default App;
