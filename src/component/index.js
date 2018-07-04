import React, {Component} from 'react'
import moment from 'moment'
import 'w3-css/w3.css';
import io from 'socket.io-client';

import config from './config.defaults.json';

import ('./style.css');

class ASMDateTime extends Component {
  constructor(props) {
    super(props);
    let self = this;
    moment.locale(config.language);
    this.state = {
      date: new moment(),
      settings: {
        position: "w3-display-topleft",
      }
    };

    this.socket = io('http://localhost:3100');
    this.socket.on('connect', function () {
      console.log('connected');
    });
    this.socket.on('disconnect', function () {
      console.log('disconnected');
    });
    this.socket.on('@alya-mirror/asm-date-time', function (data) {
      const message = JSON.parse(data).data.addonSettings;

      self.setState({
        settings: {
          position: message.position,
        }
      });

    });
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
    let classNameVariable = `date grey ${this.state.settings.position}`;
    return (
      <div className={classNameVariable}>
        <div>
          <span>{this.state.date.format('dddd')}</span>, <span>{this.state.date.format('LL')}</span>
        </div>
        <div className="time">{this.state.date.format('LT')}</div>
      </div>
    )
  }
}

export default ASMDateTime;
