"use strict";
exports.__esModule = true;
// Import Lib
var react_1 = require("react");
// Import Function
var FunctionsFirebase_1 = require("../Functions/FunctionsFirebase");
// Import Components
var Task_1 = require("./Task");
var List = function (_a) {
    var section = _a.section;
    var firebase = FunctionsFirebase_1.Firebase();
    return (react_1["default"].createElement("div", { className: "list" },
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", null),
            react_1["default"].createElement("div", null),
            react_1["default"].createElement("div", null, "\u0627\u0644\u0645\u0633\u062A\u0648\u0649"),
            react_1["default"].createElement("div", null, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),
            react_1["default"].createElement("div", null, "\u0627\u0644\u0645\u0647\u0645\u0629")),
        firebase.Tasks.filter(function (e) {
            if (section === "finish") {
                return e.state === true;
            }
            else {
                return e.section === section && e.state !== true;
            }
        }).map(function (item) {
            return react_1["default"].createElement(Task_1["default"], { item: item, key: item.id });
        }, 1000)));
};
exports["default"] = List;
