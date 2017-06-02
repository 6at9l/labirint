import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Zerg.css';

class Zerg extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      Zerg
    </div>
  )
}

export default cssModule(Zerg, styles);
