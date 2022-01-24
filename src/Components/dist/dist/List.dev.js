"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true; // Import Lib

var react_1 = require("react"); // Import Data


var firestore_1 = require("firebase/firestore");

var Firebase_1 = require("../Firebase/dist/Firebase"); // Import Components


var Task_1 = require("./Task");

var List = function List() {
  var _a = react_1.useState([]),
      Tasks = _a[0],
      setTask = _a[1]; // Get Data


  react_1.useEffect(function () {
    // SnapShot For Get Data From Firebase
    var DATA = firestore_1.onSnapshot(firestore_1.collection(Firebase_1.db, "TASKS"), function (snap) {
      // Maping Data From Snapshot and put in State
      setTask(snap.docs.map(function (doc) {
        return __assign(__assign({}, doc.data()), {
          id: doc.id
        });
      }));
    });
    return DATA;
  }, []);
  return react_1["default"].createElement("div", {
    className: "list"
  }, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", null), react_1["default"].createElement("div", null), react_1["default"].createElement("div", null, "\u0627\u0644\u0645\u0633\u062A\u0648\u0649"), react_1["default"].createElement("div", null, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"), react_1["default"].createElement("div", null, "\u0627\u0644\u0645\u0647\u0645\u0629")), Tasks.map(function (item, id) {
    return react_1["default"].createElement(Task_1["default"], {
      item: item,
      key: id
    });
  }, 1000));
};

exports["default"] = List;