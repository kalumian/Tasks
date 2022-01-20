"use strict";

exports.__esModule = true; // Import From Lib

var React = require("react"); // Import Components


var List_1 = require("./List");

var Form_1 = require("./Form");

var Header_1 = require("./Header");

var Footer_1 = require("./Footer");

var Home = function Home() {
  return React.createElement("main", null, React.createElement(Header_1["default"], null), React.createElement("div", {
    className: "content"
  }, React.createElement(Form_1["default"], null), React.createElement(List_1["default"], null)), React.createElement(Footer_1["default"], null));
};

exports["default"] = Home;