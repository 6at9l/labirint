import React from 'react';
import './Console.css';

class Block extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      code: "",
      run: false,
      changeCode : props.change
    };
  }

  readCode(e){
    this.setState({run: !this.state.run});
    this.state.changeCode(this.state.code, false);
  }
  restart(){
    this.setState({run: !this.state.run});
    this.state.changeCode(this.state.code, true);
  }
  handlerArea(event){
     this.setState({code: event.target.value});
  }

  render = () => {
    
    return (
      <div className="console" >
        <div>
          <button onClick={this.readCode.bind(this)} disabled={this.state.run ? 'disabled' : ''}> Run test </button>
          <button onClick={this.restart.bind(this)} disabled={this.state.run ? '' : 'disabled'}> restart </button>
        </div>
        <textarea value={this.state.code}  onChange={this.handlerArea.bind(this)} 
          placeholder="data -> глобальный объект, обновляется после завершения команды {result: результат выполнения (true - выполнена, false нет), finish: завершена ли последняя команда, сбрасывается пред вызовом любой из управляющих функций(true - да, false нет)}.  check() -> обновляет data, если result = true жук на искомой позиции.  move() -> движение на 1 клетку, result = true если успешно переместились иначе fasle. setDir(val) -> изменить направление движения, если val = 1, то меняем на +90, если -1 то на -90. dalay для обработки 1й команды составляет 1с"
        ></textarea>
      </div>
    )
  }
}

export default Block;