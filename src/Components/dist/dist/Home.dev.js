"use strict";

exports.__esModule = true; // Import From Lib

var React = require("react"); // Import Components


var Header_1 = require("./Header");

var Footer_1 = require("./Footer");

var Content_1 = require("./Content");

var Home = function Home() {
  return React.createElement("main", null, React.createElement(Header_1["default"], null), React.createElement(Content_1["default"], null), React.createElement(Footer_1["default"], null));
};

exports["default"] = Home;