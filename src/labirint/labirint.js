import React from 'react';
import styles from './labirint.css';
import CreateMatrix from '../logic/CreateMatrix'
import Block from '../Block';
import Zerg from '../Zerg';

class Labirint extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      map : new CreateMatrix(31, 31), 
      render : false,
      pos: [0, 0]
    }
    let self = this;
  }
  
  reRender(){
    this.setState({render: !this.setState.render});
  }
  
  bloks = [];

  visualizationMap(){
    this.bloks = [];
    for(let i = 0; i < this.state.map.x; i++){
      for(let j = 0; j < this.state.map.y; j++){
        let el = this.state.map.matrix[i][j];
        let classVar = el === 0 ? "wall" : 
                       el === " "  ? "track" :
                       el === "*" ? "star" : "start";
        if (classVar === "start"){
          this.setState.pos = [i, j];
        }
        this.bloks.push(<Block key={'id' + i + "-" + j} x={i} y={j} cl={classVar}/>);
      }
    }
    return this.bloks;
  }

  render = () => {
    return (
      <div className="map" start={this.style}>
        {this.visualizationMap()}
        <Zerg x={this.state.pos[0]} y={this.state.pos[1]}/>
      </div>
    )
  }
}

export default Labirint;
