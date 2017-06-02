import React from 'react';
import styles from './Zerg.css';

class Zerg extends React.Component {
  constructor(props){
    super(props);
    let self = this;
    this.state = { render : false }
  }

  style = {
    top: this.props.x * 20,
    left: this.props.y * 20
  }

  componentWillReceiveProps(props){
    this.props = props;
    this.style = {
      top: this.props.x * 20,
      left: this.props.y * 20
    }
    this.reRender();
  }

  reRender(){
    this.setState({render: !this.setState.render});
  }
  render = () => {
    return (
    <div className="zerg" style={this.style}>
    </div>
  )}
}

export default Zerg;
