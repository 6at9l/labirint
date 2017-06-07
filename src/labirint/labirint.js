import React from 'react';
import styles from './labirint.css';
import CreateMatrix from '../logic/CreateMatrix';
import ZergModel from '../logic/Zerg';
import Block from '../Block';
import Zerg from '../Zerg';

class Labirint extends React.Component {
  restart = true;
  bloks = [];
  zerg = {};
  constructor(props){
    super(props);
    this.state = {
      map : new CreateMatrix(21, 21),
      render : false,
      restart: true
    }
    let self = this;
    this.zerg = new ZergModel(this.state.map);
    setTimeout(() => {
      self.zerg.move();
      self.reRender();
      console.log(self.zerg);
    }, 1000);
  }

  reRender(){
    this.setState({render: !this.setState.render});
  }

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
            this.zerg.pos = [i, j];
            console.log(this.zerg);
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
        <Zerg x={this.zerg.pos[0]} y={this.zerg.pos[1]} cl={this.zerg.direction}/>
      </div>
    )
  }
}

export default Labirint;
