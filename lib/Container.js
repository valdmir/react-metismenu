'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * src/Container.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: H.Alper Tuna <halpertuna@gmail.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 23.03.2016
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Item Container / Submenu Class
 *
 * Containers are levels of menu, and keep items.
 * Also provides comminication between items to close each other's sub menu levels
 *
 * Props come from top component
 * @prop {string} iconClassPrefix - Prefix for all icon's style class name
 * @prop {string} iconLevelDown - Icon name for state of collapsed containers
 * @prop {string} iconLevelUp - Icon name for state of opened containers
 *
 * Props come from parent Item
 * @prop {boolean} visible - State of container visibility
 * @prop {Object[]} content - Recursive menu stracture (It also comes from top to first container depth)
 */

var Container = function (_Component) {
    _inherits(Container, _Component);

    function Container() {
        _classCallCheck(this, Container);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Container).apply(this, arguments));
    }

    _createClass(Container, [{
        key: 'closeChildContainers',

        /**
         * To close all item's submenu containers except sender item
         * @param {number} senderIndex - Index of sender menu item
         */
        value: function closeChildContainers(senderIndex) {
            for (var i in this.refs) {
                if (i == senderIndex) continue;
                this.refs[i].closeContainer();
            }
        }
        /**
         * Renders container block and menu items of it
         *
         * Also sends closeChildContainer method reference to props of items,
         * to make them able to close each others submenu container
         * when they are opened
         * @return {Object} React component
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var className = 'metismenu-container';
            if (this.props.visible) className += ' visible';

            return _react2.default.createElement(
                'ul',
                { className: className },
                this.props.content.map(function (item, i) {
                    return _react2.default.createElement(_Item2.default, _extends({
                        key: i,
                        ref: i,
                        closeFriendContainers: _this2.closeChildContainers.bind(_this2, i),
                        iconClassPrefix: _this2.props.iconClassPrefix,
                        iconLevelDown: _this2.props.iconLevelDown,
                        iconLevelUp: _this2.props.iconLevelUp
                    }, item));
                })
            );
        }
    }]);

    return Container;
}(_react.Component);

exports.default = Container;