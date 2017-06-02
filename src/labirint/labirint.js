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
      restart: true
    }
    let self = this;
    // test
    setTimeout(()=>{
      this.pos[0] = 10;
      this.reRender();
    }, 5000);
  }
  reRender(){
    this.setState({render: !this.setState.render});
  }
  restart = true;
  bloks = [];
  pos = [];

  visualizationMap(){
    if(this.restart){ 
      this.restart = false;
      this.bloks = [];
      for(let i = 0; i < this.state.map.x; i++){
        for(let j = 0; j < this.state.map.y; j++){
          let el = this.state.map.matrix[i][j];
          let classVar = el === 0 ? "wall" : 
                        el === " "  ? "track" :
                        el === "*" ? "star" : "start";
          if (classVar === "start"){
            this.pos = [i, j];
          }
          this.bloks.push(<Block key={'id' + i + "-" + j} x={i} y={j} cl={classVar}/>);
        }
      }
    }
    return this.bloks; 
  }

  render = () => {
    return (
      <div className="map" start={this.style}>
        {this.visualizationMap()}
        <Zerg x={this.pos[0]} y={this.pos[1]}/>
        {this.pos[0]}
      </div>
    )
  }
}

export default Labirint;
