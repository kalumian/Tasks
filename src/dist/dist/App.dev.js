"use strict";

exports.__esModule = true; // Import Data

var links_json_1 = require("./links.json"); // Import From Lib


var react_1 = require("react");

var react_router_dom_1 = require("react-router-dom"); // Import Components


var Home_1 = require("./Components/Home"); // Import Style


require("./index.css");

var App = function App() {
  return react_1["default"].createElement(react_router_dom_1.BrowserRouter, null, react_1["default"].createElement(react_router_dom_1.Routes, null, react_1["default"].createElement(react_router_dom_1.Route, {
    path: links_json_1["default"].links.Home,
    element: react_1["default"].createElement(Home_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: links_json_1["default"].links.Home,
    element: function element() {}
  })));
};

exports["default"] = App;