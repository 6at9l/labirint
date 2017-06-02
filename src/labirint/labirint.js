import React from 'react';
import styles from './labirint.css';
import CreateMatrix from '../logic/CreateMatrix'
import Block from '../Block';


class Labirint extends React.Component {
  constructor(props){
    super(props);
    this.state = {map : new CreateMatrix(31, 31), render : false}
    let self = this;
  }
  /*
  reCreateMap(){
    this.state.map.genericMatrix(11, 11);
    this.setState({render: !this.setState.render});
  }
  */
  bloks = [];
  
  visualizationMap(){
    this.bloks = [];
    for(let i = 0; i < this.state.map.x; i++){
      for(let j = 0; j < this.state.map.y; j++){
        let el = this.state.map.matrix[i][j];
        let classVar = el === 0 ? "wall" : 
                       el === " "  ? "track" :
                       el === "*" ? "star" : "start";

        this.bloks.push(<Block key={'id' + i + "-" + j} x={i} y={j} cl={classVar}/>);
      }
    }
    return this.bloks;
  }

  render = () => {
    return (
      <div className="map" start={this.style}>
        {this.visualizationMap()}
      </div>
    )
  }
}

export default Labirint;
