import React from 'react';
import './labirint.css';
import CreateMatrix from '../logic/CreateMatrix';
import ZergModel from '../logic/Zerg';
import Block from '../Block';
import Zerg from '../Zerg';

class Labirint extends React.Component {
  restart = true;
  bloks = [];
  zerg = {};
  timeAnimateStep = 100;

  test = false;

  constructor(props){
    super(props);
    this.state = {
      map : new CreateMatrix(31, 31),
      render : false,
      restart: true
    }
    let control = this;
    this.zerg = new ZergModel(this.state.map, this.reRender.bind(this));
   
    setTimeout(() => {
      document.getElementById("zerg").style.left = this.zerg.pos[1] * 20 + "px";
      document.getElementById("zerg").style.top = this.zerg.pos[0] * 20 + "px";
    }, 1000);
  }

  wait(){
    let tEnd = new Date().getTime() + this.timeAnimateStep;
    let tNow = new Date().getTime();
    while(tEnd > tNow){
      tNow = new Date().getTime();
    }
  }
  
  changeDirection(d){
    let arr = this.zerg.setDirection(d);
    document.getElementById("zerg").style.transform = "rotate(" + arr[2] + "deg)";
    return arr[0];
  }
  move(){
    let flag = this.zerg.move();
    if (flag){
      document.getElementById("zerg").style.left = this.zerg.pos[1] * 20 + "px";
      document.getElementById("zerg").style.top = this.zerg.pos[0] * 20 + "px";
    }
    return flag;
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
          }
          this.bloks.push(<Block key={'id' + i + "-" + j} x={i} y={j} cl={classVar}/>);
        }
      }
    }
    return this.bloks; 
  }

  render = function() {
    return (
      <div className="map">
        {this.visualizationMap()}
        <Zerg />
      </div>
    )
  }
}
export default Labirint;
