import styles from './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Button(props) {
return React.createElement(
"button",
{ className: "button", onClick: props.onClick },
props.value
);
}
function PasGen(props, code) {
var ln = props,
sm = "abcdefghijklmnopqrstuvwxyz",
sm_cifr = "1234567890",
sm_spec = "!@#$%^&*?/<>",
sm_tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
word = "";
for (var i = 0, n = sm.length; i < ln; ++i) {
word += sm.charAt(Math.floor(Math.random() * n));
}
return word;
}

var Menu = function (_React$Component) {
_inherits(Menu, _React$Component);

function Menu(props) {
_classCallCheck(this, Menu);

var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

_this.state = {
Buttons: Array(3).fill('off'),
IsButtonson: Array(3).fill(false),
Reload: 'New Password',
Lenght: 0
};
return _this;
}

_createClass(Menu, [{
key: "GeneratingPassword",
value: function GeneratingPassword(lenght) {
var ln = lenght,
sm = "abcdefghijklmnopqrstuvwxyz",
sm_cifr = "1234567890",
sm_spec = "!@#$%^&*?/<>",
sm_tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
word = "";
if (this.state.IsButtonson[0] == true) {
sm += sm_cifr;
}
if (this.state.IsButtonson[1] == true) {
sm += sm_spec;
}
if (this.state.IsButtonson[2] == true) {
sm += sm_tab;
}
for (var i = 0, n = sm.length; i < ln; ++i) {
word += sm.charAt(Math.floor(Math.random() * n));
}
return React.createElement(
"div",
null,
word
);
}
}, {
key: "handleClick",
value: function handleClick(i) {
var qwe = this.state.IsButtonson.slice();
var prov = this.state.isButtonson;
qwe[i] = !qwe[i];
this.setState({
IsButtonson: qwe
});
if (qwe[i] == false) {
this.state.Buttons[i] = 'off';
} else {
this.state.Buttons[i] = 'on';
}
}
}, {
key: "handleqweClick",
value: function handleqweClick(i) {
var a = document.getElementById("Lenght").value;
this.setState({
Lenght: a
});
}
}, {
key: "renderButton",
value: function renderButton(i) {
var _this2 = this;

return React.createElement(Button, { value: this.state.Buttons[i],
onClick: function onClick() {
return _this2.handleClick(i);
}
});
}
}, {
key: "ButtonforPas",
value: function ButtonforPas(i) {
var _this3 = this;

return React.createElement(Button, {
value: this.state.Reload,
onClick: function onClick() {
return _this3.handleqweClick(i);
}
});
}
}, {
key: "renderPass",
value: function renderPass(i) {
var pass = "";
pass = PasGen(i);
return React.createElement(
"div",
null,
pass
);
}
}, {
key: "render",
value: function render() {
return React.createElement(
"div",
{ "class": "Menu" },
React.createElement(
"div",
{ "class": "firstbutton" },
"\u0426\u0438\u0444\u0440\u044B",
this.renderButton(0)
),
React.createElement(
"div",
{ "class": "secondbutton" },
"\u0421\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B\u044B (!@#$%)",
this.renderButton(1)
),
React.createElement(
"div",
{ "class": "thirdbutton" },
"\u0422\u0430\u0431\u0443\u043B\u044F\u0446\u0438\u044F",
this.renderButton(2)
),
React.createElement(
"div",
{ "class": "fourthbutton" },
this.ButtonforPas(4)
),
React.createElement(
"div",
null,
this.GeneratingPassword(this.state.Lenght)
)
);
}
}]);

return Menu;
}(React.Component);

ReactDOM.render(React.createElement(Menu, null), document.getElementById('qwe'));