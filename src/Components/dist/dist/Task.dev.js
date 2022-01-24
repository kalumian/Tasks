"use strict";

exports.__esModule = true; // Import Lib

var react_1 = require("react");

var firestore_1 = require("firebase/firestore"); // Import Data


var Firebase_1 = require("../Firebase/dist/Firebase");

var Task = function Task(_a) {
  var item = _a.item;

  var HandledeletDoc = function HandledeletDoc() {
    var docRef = firestore_1.doc(Firebase_1.db, "TASKS", item.id);
    firestore_1.deleteDoc(docRef);
  };

  return react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "button-trash",
    onClick: HandledeletDoc
  }, react_1["default"].createElement("i", {
    className: "fas fa-trash-alt "
  })), react_1["default"].createElement("div", null, "-"), react_1["default"].createElement("div", null, item.def), react_1["default"].createElement("div", null, item.date1), react_1["default"].createElement("div", {
    className: "select"
  }, item.title));
};

exports["default"] = Task;