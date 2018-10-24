import React, {Component} from 'react'
import moment from 'moment'
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
    };

    this.socket = io('http://localhost:3100');
    this.socket.on('connect', function () {
      console.log('connected');
    });
    this.socket.on('disconnect', function () {
      console.log('disconnected');
    });
    this.socket.on('@alya-mirror/asm-date-time', function (data) {
      //any future settings to this addon can be added here
      const message = JSON.parse(data).data.addonSettings;
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
    return (
      <div className='date grey'>
        <div>
          <span>{this.state.date.format('dddd')}</span>, <span>{this.state.date.format('LL')}</span>
        </div>
        <div className="time">{this.state.date.format('LT')}</div>
      </div>
    )
  }
}

export default ASMDateTime;
