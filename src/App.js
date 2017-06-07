import React, { Component } from 'react';
import Labirint from './labirint';
import Console from './Console';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      code : ""
    }
  }
  changeProp(code, stop){
    this.setState({'code' : code, 'stop': stop})
  }

  render() {
    return (
      <div className="App">
        <Labirint code={this.state.code} stop={this.state.stop}/>
        <Console change={this.changeProp.bind(this)}/>
      </div>
    );
  }
}

export default App;
