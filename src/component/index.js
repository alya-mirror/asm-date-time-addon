import React, {Component} from 'react'
import moment from 'moment'

import config from './config.defaults.json';
import ('./style.css');

class ASMDateTime extends Component {
  constructor(props) {
    super(props);
    moment.locale(config.language);
    this.state = {date: new moment()};
  }

  tick() {
    this.setState({
      date: new moment()
    });
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <div className="date grey">
          <span>{this.state.date.format('dddd')}</span>, <span>{this.state.date.format('LL')}</span>
        </div>
        <div className="time">{this.state.date.format('LT')}</div>
      </div>
    )
  }
}


export default ASMDateTime;