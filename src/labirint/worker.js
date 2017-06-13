
function setDir(d){
  data = {finish: false};
  this.postMessage({"action": "changeDirection", "d": d});
}

function move(){
  data = {finish: false};
  this.postMessage({"action": "move"});
}

function check(){
  data = {finish: false};
  this.postMessage({"action": "check"});
}
var data = {};

var strData = "var data = {};this.addEventListener('message', function(e){data = e.data;});";
var text = `
    function setDir(d){
      data = {finish: false};
      this.postMessage({"action": "changeDirection", "d": d});
    }

    function move(){
      data = {finish: false};
      this.postMessage({"action": "move"});
    }

    function check(){
      data = {finish: false};
      this.postMessage({"action": "check"});
    }`;
strData += text;
export default {setDir, move, check, strData};


