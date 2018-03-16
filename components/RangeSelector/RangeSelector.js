'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _recompose = require('recompose');

var _Box = require('../Box');

var _hocs = require('../hocs');

var _EdgeControl = require('./EdgeControl');

var _EdgeControl2 = _interopRequireDefault(_EdgeControl);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RangeSelector = function (_Component) {
  _inherits(RangeSelector, _Component);

  function RangeSelector() {
    var _temp, _this, _ret;

    _classCallCheck(this, RangeSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.valueForMouseCoord = function (event) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          max = _this$props.max,
          min = _this$props.min,
          step = _this$props.step;

      var rect = (0, _reactDom.findDOMNode)(_this.containerRef).getBoundingClientRect();
      if (direction === 'vertical') {
        var y = event.clientY - (rect.y || 0); // unit test resilience
        var scaleY = rect.height / (max - min + step) || 1; // unit test resilience
        return Math.floor(y / scaleY);
      }
      var x = event.clientX - (rect.x || 0); // unit test resilience
      var scaleX = rect.width / (max - min + step) || 1; // unit test resilience
      return Math.floor(x / scaleX);
    }, _this.onClick = function (event) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          values = _this$props2.values;
      var lastChange = _this.state.lastChange;

      var value = _this.valueForMouseCoord(event);
      if (value <= values[0] || value < values[1] && lastChange === 'lower') {
        _this.setState({ lastChange: 'lower' }, function () {
          return onChange([value, values[1]]);
        });
      } else if (value >= values[1] || value > values[0] && lastChange === 'upper') {
        _this.setState({ lastChange: 'upper' }, function () {
          return onChange([values[0], value]);
        });
      }
    }, _this.lowerMouseDown = function () {
      _this.setState({ changing: 'lower' });
      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    }, _this.upperMouseDown = function () {
      _this.setState({ changing: 'upper' });
      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    }, _this.selectionMouseDown = function (event) {
      var moveValue = _this.valueForMouseCoord(event);
      _this.setState({ changing: 'selection', moveValue: moveValue });
      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    }, _this.mouseMove = function (event) {
      var _this$props3 = _this.props,
          max = _this$props3.max,
          min = _this$props3.min,
          onChange = _this$props3.onChange,
          values = _this$props3.values;
      var _this$state = _this.state,
          changing = _this$state.changing,
          moveValue = _this$state.moveValue;

      var value = _this.valueForMouseCoord(event);
      var nextValues = void 0;
      if (changing === 'lower' && value <= values[1] && value !== moveValue) {
        nextValues = [value, values[1]];
      } else if (changing === 'upper' && value >= values[0] && value !== moveValue) {
        nextValues = [values[0], value];
      } else if (changing === 'selection' && value !== moveValue) {
        var delta = value - moveValue;
        if (values[0] + delta >= min && values[1] + delta <= max) {
          nextValues = [values[0] + delta, values[1] + delta];
        }
      }
      if (nextValues) {
        _this.setState({ lastChange: changing, moveValue: value }, function () {
          onChange(nextValues);
        });
      }
    }, _this.mouseUp = function () {
      _this.setState({ changing: undefined });
      window.removeEventListener('mousemove', _this.mouseMove);
      window.removeEventListener('mouseup', _this.mouseMove);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  RangeSelector.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseMove);
    window.removeEventListener('mouseup', this.mouseMove);
  };

  RangeSelector.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        color = _props.color,
        direction = _props.direction,
        invert = _props.invert,
        max = _props.max,
        messages = _props.messages,
        min = _props.min,
        onChange = _props.onChange,
        opacity = _props.opacity,
        round = _props.round,
        size = _props.size,
        step = _props.step,
        theme = _props.theme,
        values = _props.values,
        rest = _objectWithoutProperties(_props, ['color', 'direction', 'invert', 'max', 'messages', 'min', 'onChange', 'opacity', 'round', 'size', 'step', 'theme', 'values']);

    var _state = this.state,
        nextLower = _state.nextLower,
        nextUpper = _state.nextUpper;


    var scale = (max - min) / (max - min + step);
    var lower = nextLower !== undefined ? nextLower : values[0];
    var upper = nextUpper !== undefined ? nextUpper : values[1];
    var fill = direction === 'vertical' ? 'horizontal' : 'vertical';

    return _react2.default.createElement(
      _Box.Box,
      _extends({
        ref: function ref(_ref) {
          _this2.containerRef = _ref;
        },
        direction: direction === 'vertical' ? 'column' : 'row',
        fill: fill
      }, rest, {
        onClick: onChange ? this.onClick : undefined
      }),
      _react2.default.createElement(_Box.Box, {
        style: { flex: (lower - min) * scale + ' 0 0' },
        background: invert ? { color: color || 'light-4', opacity: opacity } : undefined,
        fill: fill,
        round: round
      }),
      _react2.default.createElement(_EdgeControl2.default, {
        a11yTitle: messages.lower,
        tabIndex: 0,
        color: color,
        direction: direction,
        edge: 'lower',
        theme: theme,
        onMouseDown: onChange ? this.lowerMouseDown : undefined,
        onDecrease: onChange && lower > min ? function () {
          return onChange([lower - step, upper]);
        } : undefined,
        onIncrease: onChange && lower < upper ? function () {
          return onChange([lower + step, upper]);
        } : undefined
      }),
      _react2.default.createElement(_Box.Box, {
        style: {
          flex: (upper - lower + step) * scale + ' 0 0',
          cursor: direction === 'vertical' ? 'ns-resize' : 'ew-resize'
        },
        background: invert ? undefined : { color: color || 'brand', opacity: opacity },
        fill: fill,
        round: round,
        onMouseDown: onChange ? this.selectionMouseDown : undefined
      }),
      _react2.default.createElement(_EdgeControl2.default, {
        a11yTitle: messages.upper,
        tabIndex: 0,
        color: color,
        direction: direction,
        edge: 'upper',
        theme: theme,
        onMouseDown: onChange ? this.upperMouseDown : undefined,
        onDecrease: onChange && upper > lower ? function () {
          return onChange([lower, upper - step]);
        } : undefined,
        onIncrease: onChange && upper < max ? function () {
          return onChange([lower, upper + step]);
        } : undefined
      }),
      _react2.default.createElement(_Box.Box, {
        style: { flex: (max - upper) * scale + ' 0 0' },
        background: invert ? { color: color || 'light-4', opacity: opacity } : undefined,
        fill: fill,
        round: round
      })
    );
  };

  return RangeSelector;
}(_react.Component);

RangeSelector.defaultProps = {
  direction: 'horizontal',
  max: 100,
  messages: { lower: 'Lower Bounds', upper: 'Upper Bounds' },
  min: 0,
  opacity: 'medium',
  size: 'medium',
  step: 1
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(RangeSelector);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(RangeSelector);