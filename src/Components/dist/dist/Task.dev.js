"use strict";

exports.__esModule = true;

var react_1 = require("react");

var Task = function Task(_a) {
  var item = _a.item;
  return react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", null, "-"), react_1["default"].createElement("div", null, "-"), react_1["default"].createElement("div", null, item.def), react_1["default"].createElement("div", null, item.date1), react_1["default"].createElement("div", {
    className: "select"
  }, item.title));
};

exports["default"] = Task;