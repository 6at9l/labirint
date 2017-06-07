import React from 'react';
import './labirint.css';
import CreateMatrix from '../logic/CreateMatrix';
import ZergModel from '../logic/Zerg';
import Block from '../Block';
import Zerg from '../Zerg';
import wr from './worker';


class Labirint extends React.Component {
  restart = true;
  bloks = [];
  zerg = {};
  timeAnimateStep = 1000;
  w = {terminate : function(){}};
  test = false;

  constructor(props){
    super(props);
    this.state = {
      map : new CreateMatrix(31, 31),
      render : false,
      restart: true,
      end: false
    }
    let control = this;
    this.zerg = new ZergModel(this.state.map, this.reRender.bind(this));
    setTimeout(() => {
      document.getElementById("zerg").style.left = this.zerg.pos[1] * 20 + "px";
      document.getElementById("zerg").style.top = this.zerg.pos[0] * 20 + "px";
    }, 1000);
  }

  componentWillReceiveProps(props){
    if (!props.stop){
      this.algoritm = props.code;
      if ( this.algoritm.length > 0) {
        var script = wr.setDir.toString();
        script += wr.move.toString();
        script += wr.check.toString();
        script += wr.strData;

        var blob = new Blob([script + this.algoritm]);
        var blobURL = window.URL.createObjectURL(blob);
        this.w = new Worker(blobURL);

        this.w.onmessage = function(e){
          if(e.data["action"] === "check"){
            setTimeout(function(){
              this.w.postMessage({"result" : this.zerg.checkFinish(), "finish" : true});
              if (this.zerg.checkFinish()){
                alert("win");
              }
            }.bind(this), 1000);
          }
          if (e.data["action"] === "changeDirection"){
              let arr = this.zerg.setDirection(e.data["d"]);
              document.getElementById("zerg").style.transform = "rotate(" + arr[2] + "deg)";
              setTimeout(function(){
                this.w.postMessage({"result" : true, "finish" : true});
              }.bind(this), 1000);
          }
          if (e.data["action"] === "move"){
            let flag = this.zerg.move();
            if (flag){
              document.getElementById("zerg").style.left = this.zerg.pos[1] * 20 + "px";
              document.getElementById("zerg").style.top = this.zerg.pos[0] * 20 + "px";
            }
            setTimeout(function(){

              this.w.postMessage({"result" : flag, "finish" : true});
            }.bind(this), 1000);
          }
        }.bind(this);
      }
    } else {
      this.w.terminate();
      //this.w = {terminate : function(){}};
    }
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
