'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _configDefaults = require('./config.defaults.json');

var _configDefaults2 = _interopRequireDefault(_configDefaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import('./style.css');

var ASMDateTime = function (_Component) {
  _inherits(ASMDateTime, _Component);

  function ASMDateTime(props) {
    _classCallCheck(this, ASMDateTime);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _moment2.default.locale(_configDefaults2.default.language);
    _this.state = { date: new _moment2.default() };
    return _this;
  }

  ASMDateTime.prototype.tick = function tick() {
    this.setState({
      date: new _moment2.default()
    });
  };

  ASMDateTime.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.timerId = setInterval(function () {
      return _this2.tick();
    }, 1000);
  };

  ASMDateTime.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timerId);
  };

  ASMDateTime.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'date grey' },
        _react2.default.createElement(
          'span',
          null,
          this.state.date.format('dddd')
        ),
        ', ',
        _react2.default.createElement(
          'span',
          null,
          this.state.date.format('LL')
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'time' },
        this.state.date.format('LT')
      )
    );
  };

  return ASMDateTime;
}(_react.Component);

exports.default = ASMDateTime;
module.exports = exports['default'];