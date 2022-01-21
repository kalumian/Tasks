"use strict";
exports.__esModule = true;
// Import Lib
var react_1 = require("react");
// Import Components
var Task_1 = require("./Task");
var List = function () {
    var _a = react_1.useState([]), Tasks = _a[0], setTask = _a[1];
    return (react_1["default"].createElement("div", { className: "list" },
        react_1["default"].createElement("div", { className: "row" },
            react_1["default"].createElement("div", null, "\u062A\u0645"),
            react_1["default"].createElement("div", null, "\u062D\u0630\u0641"),
            react_1["default"].createElement("div", null, "\u0627\u0644\u0645\u0633\u062A\u0648\u0649"),
            react_1["default"].createElement("div", null, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E"),
            react_1["default"].createElement("div", null, "\u0627\u0644\u0645\u0647\u0645\u0629")),
        Tasks.map(function (item, key) {
            return react_1["default"].createElement(Task_1["default"], { item: item, key: key });
        })));
};
exports["default"] = List;
