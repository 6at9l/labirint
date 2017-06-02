import React from 'react';
import styles from './Zerg.css';

class Zerg extends React.Component {
  constructor(props){
    super(props);
  }

  style = {
    top: this.props.x * 20,
    left: this.props.y * 20
  }
  
  static propTypes = {

  }
  render = () => (
    <div className="zerg">
    </div>
  )
}

export default Zerg;
