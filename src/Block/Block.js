import React from 'react';
import styles from './Block.css';

class Block extends React.Component {
  constructor(props){
    super(props);

  }
  style = {
    top: this.props.x * 20,
    left: this.props.y * 20
  }
  render = () => (
    <div className={"block " + this.props.cl} style={this.style}>

    </div>
  )
}

export default Block;
