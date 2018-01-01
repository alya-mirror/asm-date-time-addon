function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import config from '../configs/config.defaults';
import './style.css';
import moment from 'moment';

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    moment.locale(config.language);
    _this.state = { date: new moment() };
    return _this;
  }

  _default.prototype.tick = function tick() {
    this.setState({
      date: new moment()
    });
  };

  _default.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.timerId = setInterval(function () {
      return _this2.tick();
    }, 1000);
  };

  _default.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timerId);
  };

  _default.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'date grey' },
        React.createElement(
          'span',
          null,
          this.state.date.format('dddd')
        ),
        ', ',
        React.createElement(
          'span',
          null,
          this.state.date.format('LL')
        )
      ),
      React.createElement(
        'div',
        { className: 'time' },
        this.state.date.format('LT')
      )
    );
  };

  return _default;
}(Component);

export { _default as default };